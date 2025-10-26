import React from "react";
import Header from "./components/Header";
import CodeSnippet from "./components/CodeSnippet";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

const goServerCode = `package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/plain; charset=utf-8")
    w.WriteHeader(http.StatusOK)
    fmt.Fprint(w, "Hello World")
}

func main() {
    http.HandleFunc("/", handler)
    // Server listens on port 8080
    if err := http.ListenAndServe(":8080", nil); err != nil {
        panic(err)
    }
}`;

const dockerfileCode = `# syntax=docker/dockerfile:1
FROM golang:1.22-alpine AS build
WORKDIR /app
COPY . .
RUN go build -o server .

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/server /usr/local/bin/server
EXPOSE 8080
CMD ["server"]`;

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6 shadow-lg">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Minimal Go HTTP server</h2>
          <p className="text-slate-300 mb-4">This server responds with "Hello World" to any HTTP request on port 8080.</p>
          <CodeSnippet title="main.go" language="go" code={goServerCode} />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6 shadow-lg">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Run locally</h2>
          <Steps steps={[
            {
              label: "Create a new folder and enter it",
              command: "mkdir hello-go && cd hello-go",
            },
            {
              label: "Create the file",
              command: "nano main.go",
              note: "Paste the code above and save the file.",
            },
            {
              label: "Initialize and run",
              command: "go mod init example.com/hello && go run main.go",
            },
            {
              label: "Test in another terminal",
              command: "curl -i http://localhost:8080",
            },
          ]} />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6 shadow-lg">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Optional: Containerize</h2>
          <CodeSnippet title="Dockerfile" language="dockerfile" code={dockerfileCode} />
          <Steps steps={[
            { label: "Build image", command: "docker build -t hello-go ." },
            { label: "Run container", command: "docker run --rm -p 8080:8080 hello-go" },
            { label: "Test", command: "curl -i http://localhost:8080" },
          ]} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
