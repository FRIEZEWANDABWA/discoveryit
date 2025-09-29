# main.py - FastAPI server for Discovery IT Solutions

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import List, Dict, Optional
import os
import sys
import socket

app = FastAPI(title="Discovery IT Solutions API", version="1.0.0")

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:3001",
        "https://discoveryitsolutions.netlify.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for API requests
class LoginRequest(BaseModel):
    username: str
    password: str

class ContactRequest(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str

class DeviceScanRequest(BaseModel):
    device_ids: Optional[List[str]] = None

class IncidentRequest(BaseModel):
    severity: str
    reason: str
    affected_resource: Optional[str] = None

# Demo data
demo_users = [
    {"username": "admin", "password": "demo", "roles": ["admin"]},
    {"username": "analyst", "password": "demo", "roles": ["analyst"]},
]

demo_devices = [
    {
        "hostname": "web-server-01",
        "ip_addr": "192.168.1.10",
        "os": "Ubuntu 20.04",
        "risk_score": 0.2,
        "status": "active",
        "last_seen": "2024-01-01T10:00:00Z"
    },
    {
        "hostname": "db-server-01", 
        "ip_addr": "192.168.1.20",
        "os": "CentOS 8",
        "risk_score": 0.1,
        "status": "active",
        "last_seen": "2024-01-01T10:00:00Z"
    }
]

demo_incidents = [
    {
        "id": "INC-001",
        "severity": "medium",
        "reason": "Suspicious login attempt",
        "status": "open",
        "timestamp": "2024-01-01T09:30:00Z"
    },
    {
        "id": "INC-002",
        "severity": "high", 
        "reason": "Malware detected",
        "status": "investigating",
        "timestamp": "2024-01-01T08:15:00Z"
    }
]

# Authentication endpoints
@app.post("/api/auth/login")
async def login(request: LoginRequest):
    """Authenticate user credentials"""
    for user in demo_users:
        if user["username"] == request.username and user["password"] == request.password:
            return {
                "success": True,
                "user": user["username"],
                "roles": user["roles"],
                "token": "demo_jwt_token"
            }
    
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/auth/check-access")
async def check_access(user_id: str, resource: str, action: str):
    """Check if user has access to resource"""
    # Demo implementation
    return {
        "allowed": True,
        "reason": "Demo mode - access granted",
        "policy": "demo_policy"
    }

# Device management endpoints
@app.get("/api/devices")
async def get_devices():
    """Get all devices with their security status"""
    return {"devices": demo_devices}

@app.post("/api/devices/scan")
async def scan_devices(request: DeviceScanRequest):
    """Run security scan on devices"""
    scan_results = []
    for device in demo_devices:
        scan_results.append({
            "device": device["hostname"],
            "risk_score": device["risk_score"],
            "vulnerabilities": ["CVE-2023-1234"] if device["risk_score"] > 0.15 else [],
            "status": "scanned"
        })
    
    return {
        "scan_results": scan_results,
        "timestamp": "2024-01-01T10:00:00Z"
    }

# Incident management endpoints
@app.get("/api/incidents")
async def get_incidents():
    """Get all security incidents"""
    return {"incidents": demo_incidents}

@app.post("/api/incidents")
async def create_incident(request: IncidentRequest):
    """Create new security incident"""
    new_incident = {
        "id": f"INC-{len(demo_incidents) + 1:03d}",
        "severity": request.severity,
        "reason": request.reason,
        "status": "open",
        "timestamp": "2024-01-01T10:00:00Z"
    }
    demo_incidents.append(new_incident)
    
    return {
        "incident_created": True,
        "incident_id": new_incident["id"]
    }

# Threat detection endpoints
@app.get("/api/threats/analyze")
async def analyze_threats():
    """Run threat detection analysis"""
    threats = [
        {
            "type": "brute_force_attempt",
            "source": "192.168.1.100",
            "timestamp": "2024-01-01T09:45:00Z",
            "severity": "medium"
        },
        {
            "type": "suspicious_file_access",
            "source": "web-server-01",
            "timestamp": "2024-01-01T09:30:00Z", 
            "severity": "low"
        }
    ]
    
    return {
        "threats_found": threats,
        "analysis_time": "2024-01-01T10:00:00Z"
    }

# Dashboard data endpoints
@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    """Get dashboard statistics"""
    return {
        "total_users": len(demo_users),
        "total_devices": len(demo_devices),
        "open_incidents": len([i for i in demo_incidents if i["status"] == "open"]),
        "active_policies": 5,
        "average_risk_score": sum(d["risk_score"] for d in demo_devices) / len(demo_devices),
        "system_status": "operational"
    }

# Contact form endpoint
@app.post("/api/contact")
async def submit_contact(request: ContactRequest):
    """Handle contact form submission"""
    # In a real application, you would save this to a database
    # and/or send an email notification
    print(f"Contact form submission: {request.dict()}")
    
    return {
        "success": True,
        "message": "Thank you for your message. We will get back to you soon!"
    }

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Discovery IT Solutions API"}

# Root route
@app.get("/")
async def root():
    return {
        "message": "🖥️ Discovery IT Solutions - Cybersecurity Platform",
        "version": "1.0.0",
        "features": ["Cybersecurity", "IT Management", "Networking", "Access Control"],
        "endpoints": {
            "health": "/health",
            "docs": "/docs",
            "devices": "/api/devices",
            "incidents": "/api/incidents",
            "dashboard": "/api/dashboard/stats"
        },
        "demo_credentials": {
            "username": "admin",
            "password": "demo"
        },
        "status": "operational"
    }

def get_wsl_ip():
    """Get WSL IP address for Windows access"""
    try:
        hostname = socket.gethostname()
        return socket.gethostbyname(hostname)
    except:
        return "localhost"

if __name__ == "__main__":
    import uvicorn
    
    print("🚀 Discovery IT Solutions API Starting...")
    print("🔥 Cybersecurity | IT | Networking | Access Control")
    print("⚠️ Running in demo mode")
    
    wsl_ip = get_wsl_ip()
    port = int(os.environ.get("PORT", 8001))
    
    if wsl_ip != "localhost":
        print(f"🌐 WSL IP: http://{wsl_ip}:{port}")
    print(f"🌐 Local: http://localhost:{port}")
    print(f"📚 API Docs: http://localhost:{port}/docs")
    print(f"🔍 Windows Browser: http://{wsl_ip}:{port}")
    
    print("\n🚀 Discovery IT Solutions Platform Ready!")
    print("\n🔑 Demo Login: admin / demo")
    print("📱 Try these endpoints in your browser!")
    
    uvicorn.run(app, host="0.0.0.0", port=port)