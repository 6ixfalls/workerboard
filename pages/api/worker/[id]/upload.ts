import nextConnect from "next-connect";
import multer from "multer";
import { getLoginSession } from "../../../../lib/auth";
import { findUser } from "../../../../lib/user";
import path from "path";
import { existsSync, mkdirSync } from "fs";
import { NextApiRequest } from "next";

interface MulterMessage extends NextApiRequest {
    file: any;
    user: any;
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const finalPath = path.join(process.cwd(), `/.data/${req.query.id}`);
        if (!existsSync(path.join(process.cwd(), ".data"))) {
            mkdirSync(path.join(process.cwd(), ".data"));
        }
        if (!existsSync(finalPath)) {
            mkdirSync(finalPath);
        }
        cb(null, finalPath);
    },
    filename: function (req, file, cb) {
        cb(null, "worker.js");
    },
});

const multerUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/javascript") {
            return cb(null, false);
        }
        cb(null, true);
    },
});

const apiRoute = nextConnect();
// User auth middleware
apiRoute.use(async (req: MulterMessage, res, next) => {
    const session = await getLoginSession(req);
    const user = (session && (await findUser(session.email))) ?? null;
    req.user = user;
    if (!user) {
        res.statusCode = 400;
        res.end("Not logged in");
        return;
    } else {
        next();
    }
});
// Worker ownership middleware
apiRoute.use(async (req: MulterMessage, res, next) => {
    let workerId = req.query.id;
    if (Array.isArray(workerId)) {
        workerId = workerId[0];
    }
    const worker = await prisma?.worker.findUnique({
        where: {
            id: workerId,
        },
    });

    if (worker) {
        if (worker.uid === req.user.id) {
            next();
        } else {
            res.statusCode = 400;
            res.end("Not authorized");
            return;
        }
    } else {
        res.statusCode = 404;
        res.end("Worker not found");
        return;
    }
});
apiRoute.use(multerUpload.single("file"));
apiRoute.post(async (req: MulterMessage, res) => {
    if (req.file) {
        res.statusCode = 200;
        res.end(`Uploaded worker file`);
    } else {
        res.statusCode = 400;
        res.end("No file uploaded");
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
        sizeLimit: "5mb", // Size limit for uploaded files
    },
};
