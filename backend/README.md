# Hamroh Cargo Backend

FastAPI architecture for the Hamroh Cargo logistics ecosystem.

## Modules

- JWT authentication and RBAC-ready roles
- Shipment tracking API
- Admin-managed content modules
- Warehouse, review, FAQ, service, blog, and SEO endpoints
- Redis-ready rate limiting and cache layer
- PostgreSQL-ready SQLAlchemy session layout

## Local Development

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
