#!/usr/bin/env python3
"""
Simple HTTP server to serve the portfolio site locally
Run: python serve.py
Then open: http://localhost:8000
"""

import http.server
import socketserver
import os
import mimetypes

# Add PDF MIME type to ensure proper serving
mimetypes.add_type('application/pdf', '.pdf')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_GET(self):
        # Custom handling for PDF files
        if self.path.endswith('.pdf'):
            self.send_response(200)
            self.send_header('Content-Type', 'application/pdf')
            self.send_header('Content-Disposition', 'attachment; filename="' + os.path.basename(self.path) + '"')
            self.end_headers()
            
            try:
                file_path = self.path.lstrip('/')
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            except FileNotFoundError:
                self.send_error(404, "File not found")
        else:
            super().do_GET()

if __name__ == "__main__":
    PORT = 8000
    
    # Change to the directory containing the HTML files
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
