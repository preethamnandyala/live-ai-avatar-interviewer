from fastapi import FastAPI
app = FastAPI(title="Live AI Avatar Interviewer API")

@app.get("/healthz")
def healthz():
    return {"status": "ok"}
    