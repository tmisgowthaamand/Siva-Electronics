#!/bin/bash

# Siva Electronics - Quick Start Script
# Run this to set up development environment

echo "🚀 Siva Electronics - QR Payment Setup"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v)${NC}"

# Frontend setup
echo ""
echo -e "${BLUE}Setting up Frontend...${NC}"
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${GREEN}✓ Created .env file${NC}"
    fi
fi

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi
echo -e "${GREEN}✓ Frontend ready${NC}"

# Backend setup
echo ""
echo -e "${BLUE}Setting up Backend...${NC}"
cd backend

if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "${GREEN}✓ Created backend/.env file${NC}"
        echo ""
        echo -e "${YELLOW}⚠️  UPDATE backend/.env WITH YOUR PAYTM CREDENTIALS:${NC}"
        echo "   PAYTM_MERCHANT_ID=oAqfaJ24295935325563"
        echo "   PAYTM_MERCHANT_KEY=WqZs7&tlq7h5Oasn"
        echo ""
    fi
fi

if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi
echo -e "${GREEN}✓ Backend ready${NC}"

cd ..

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Setup Complete! 🎉${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

echo "Next steps:"
echo ""
echo "1. Update credentials:"
echo -e "   ${YELLOW}nano backend/.env${NC}"
echo "   (If not already updated with your credentials)"
echo ""
echo "2. Start the backend (in one terminal):"
echo -e "   ${YELLOW}cd backend && npm run dev${NC}"
echo ""
echo "3. Start the frontend (in another terminal):"
echo -e "   ${YELLOW}npm run dev${NC}"
echo ""
echo "4. Frontend will open at: ${BLUE}http://localhost:5173${NC}"
echo "   Backend API at: ${BLUE}http://localhost:5000${NC}"
echo ""
echo "Test QR Payment:"
echo "   Navigate to Cart → Checkout → QR Payment"
echo ""
