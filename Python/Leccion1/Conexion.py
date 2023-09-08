import logging as log
import sys

from psycopg2 import pool
import logging
# Configuración básica del registro
logging.basicConfig(level=logging.DEBUG)

# Ejemplo de uso del registro
logging.debug("Este es un mensaje de depuración")
logging.info("Este es un mensaje de información")
logging.warning("Este es un mensaje de advertencia")
logging.error("Este es un mensaje de error")
logging.critical("Este es un mensaje crítico")

class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST = '127.0.0.1'
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    @classmethod
    def obtenerConexion(cls):
        conexion = cls.obtenerPool().getconn()
        log.debug(f'conexion obtenidad de pool {conexion}')
        return conexion

    @classmethod
    def obtenercursor(cls):
        pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CON,
                                                      cls._MAX_CON,
                                                      database=cls._DATABASE,
                                                      user=cls._USERNAME,  # Corregido
                                                      password=cls._PASSWORD,
                                                      port=cls._DB_PORT,
                                                      host=cls._HOST)
                log.debug(f'Creacion exitosa {cls._pool}')
                return cls._pool
            except Exception as e:
                log.debug(f'Ocurrio un error de tipo {e}')
                sys.exit()
        else:
            return cls._pool
    @classmethod
    def liberarConexion(cls, conexion):
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Regresamos la conexion del pool')

    @classmethod
    def cerrarConexiones(cls):
        cls.obtenerPool().closeall()

if __name__=='__main__':
    conexion1 = Conexion.obtenerConexion()
    Conexion.liberarConexion(conexion1)