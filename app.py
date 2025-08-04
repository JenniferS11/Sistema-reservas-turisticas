from flask import Flask
from models.bd import conectar
app = Flask(__name__)

try: 
    conexion = conectar()
    print("Conexión exitosa a la base de datos.")
except Exception as e:
    print("Error al conectar a la base de datos:", e)
    conexion = None
@app.route('/')
def index():
    return "Bienvenido a la aplicación de reservas turísticas"
@app.route('/cerrar_conexion')
def cerrar_conexion():
    if conexion:
        from models.bd import cerrar_conexion
        cerrar_conexion(conexion)
    return "Conexión cerrada."  
