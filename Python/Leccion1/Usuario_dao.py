import logging
#dao
from CursorDelPool import CursorDelPool
import usuario

class UsuarioDao:
    '''
    DAO -> Data Access objet : para la tabla de usuario
    Crud -> Create read update delete
    '''

    _SELECT = 'SELECT * FROM usuario ORDER BY id_usuario'
    _INSERT = "INSERT INTO usuario(username, password) VALUES (%s, %s)"
    _ACTUALIZAR = 'UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s'
    _ELIMINAR = 'DELETE FROM usuario WHERE id_usuario=%s'

    @classmethod
    def Seleccionar(cls):
        with CursorDelPool() as cursor:
            log.debug('Seleccionando usuarios')
            cursor.execute(cls._SELECT)
            registros = cursor.fetchall()
            usuarios =[]
            for registro in registros:
                usuario = usuario(registro[0],registro[1],registro[2])
                usuarios.append(usuario)
            return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f'usuario a insertar: {usuario}')
            valores = (usuario.username, usuario.password)
            cursor.execute(cls._INSERT, valores)
            return cursor.rowcount

    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool()  as cursor:
            log.debug(f'Usuario a actualizar: {usuario}')
            valores = (usuario.username, usuario.password, usuario.id_usuario)
            cursor.execute(cls._ACTUALIZAR, valores)
            return cursor.rowcount

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool()  as cursor:
            log.debug(f'usuario a eliminar: {usuario}')
            valores = (usuario.id_usuario,)
            cursor.execute(cls._ELIMINAR, valores)
            return cursor.rowcount

if __name__=='__main__':
    # Crear un objeto de registro
    log = logging.getLogger(__name__)

    with CursorDelPool() as cursor:
        log.debug('Seleccionando usuarios')


   #Listar o seleccionar
    usuario = UsuarioDao.Seleccionar()
    for usuario in usuario:
        log.debug(usuario)

    #actualizar usuario
    usuario = usuario(id_usuario=1, username='' ,password='154')
    usuario_modificado = UsuarioDao.actualizar(usuario)
    log.debug(f'usuario modificado: {usuario_modificado}')

    #insertar usuario
    usuario = usuario(username='kely',password='244')
    usuario_insertado = UsuarioDao.insertar(usuario)
    log.debug(f'usuario modificado: {usuario_insertado}')

    #eliminar usuario
    usuario = usuario(id_usuario=2,)
    usuario_eliminado = UsuarioDao.eliminar(usuario)
    log.debug(f'usuario eliminado: {usuario_eliminado}')

