using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [ (name = "main", worker = .mainWorker) ],
  sockets = [ ( name = "sock", address = "unix:%%SocketPath%%", http = (), service = "main" ) ],
);

const mainWorker :Workerd.Worker = (
  # YYYY-MM-DD
  compatibilityDate = "2022-09-16",
  serviceWorkerScript = embed "%%WorkerID%%.js",
);