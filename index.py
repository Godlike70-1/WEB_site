import tkinter as tk
from tkinter import messagebox
import socket
from threading import Thread

# Function to scan a single port
def scan_port(host, port, results):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    try:
        sock.connect((host, port))
    except (socket.timeout, ConnectionRefusedError):
        results[port] = False
    else:
        results[port] = True
    sock.close()

# Function to start scanning
def start_scan():
    host = entry_host.get()
    start_port = int(entry_start_port.get())
    end_port = int(entry_end_port.get())
    results = {}

    # Disable the scan button and clear the results text box
    button_scan.config(state=tk.DISABLED)
    text_results.delete(1.0, tk.END)
    
    def scan():
        for port in range(start_port, end_port + 1):
            scan_port(host, port, results)
            result_text = f"Port {port}: {'Open' if results[port] else 'Closed'}\n"
            text_results.insert(tk.END, result_text)
        button_scan.config(state=tk.NORMAL)
    
    thread = Thread(target=scan)
    thread.start()

# Create the main application window
app = tk.Tk()
app.title("Port Scanner")
app.geometry("400x300")

# Host entry
label_host = tk.Label(app, text="Host:")
label_host.pack()
entry_host = tk.Entry(app)
entry_host.pack()

# Start port entry
label_start_port = tk.Label(app, text="Start Port:")
label_start_port.pack()
entry_start_port = tk.Entry(app)
entry_start_port.pack()

# End port entry
label_end_port = tk.Label(app, text="End Port:")
label_end_port.pack()
entry_end_port = tk.Entry(app)
entry_end_port.pack()

# Scan button
button_scan = tk.Button(app, text="Start Scan", command=start_scan)
button_scan.pack()

# Results text box
text_results = tk.Text(app)
text_results.pack()

# Start the Tkinter event loop
app.mainloop()
