package UTN.datos;

import UTN.dominio.Estudiante;
import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDao {
    // método listar
    public List<Estudiante> listar() {
        List<Estudiante> estudiantes = new ArrayList<>();
        // Creamos algunos objetos que son necesarios para comunicarse con la base de datos
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY estudiantes2022";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                // Agregar estudiante a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }
        return estudiantes;
    }

    // método por id -> findById
    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; // se encontró un registro
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión");
            }
        }
        return false; // no se encontró el estudiante
    }

    //metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido,telefono, email) VALUES (?, ?, ?, ?";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return  true;
        } catch (Exception e){
            System.out.println("Ocurrio un error al agregar estudiante: "+e.getMessage());
        }//final catch
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error al cerrar la conexion"+e.getMessage());
            }//final catch
        }//fin finally
        return false;
    }//final metodo agregarEstudiante

    public static void main(String[] args) {
        // Listar los estudiantes
        EstudianteDao estudianteDao = new EstudianteDao();
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listar();
        estudiantes.forEach(System.out::println);
    }
}