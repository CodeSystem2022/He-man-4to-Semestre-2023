package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class LibroForm {
    private JTable table1;

    @Component
    public class LibroFrom extends JFrame {
        LibroServicio libroServicio;
        private JPanel panel;
        private JTable TablaLibro;
        private DefaultTableModel tableModeloLibros ;
        private JTable table1;
        private JTable tablaLibro;

        @Autowired
        public LibroFrom(LibroServicio libroServicio) {
            this.libroServicio = libroServicio;
            iniciarForma();
        }
        private void iniciarForma(){
            setContentPane(panel);
            setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            setVisible(true);
            setSize(900, 700);
            //  Para obtener las dimensiones de la ventana
            Toolkit toolkit = Toolkit.getDefaultToolkit();
            Dimension tamanioPantalla = toolkit.getScreenSize();
            int x = (tamanioPantalla.width - getWidth() / 2);
            int y = (tamanioPantalla.height - getHeight() / 2);
            setLocation(x, y);
        }



        private void createUIComponents() {
            this.tableModeloLibros = new DefaultTableModel(0, 5);
            String[] cabecera = {"id","Libro","Autor", "Precio", "Existencias"};
            this.tableModeloLibros.setColumnIdentifiers(cabecera);
            //instanciar el objeto de Jtable
            this.tablaLibro = new JTable(tableModeloLibros);
            listarLibros();
        }
       private void listarLibros(){
            //limpiar la tabla
           tableModeloLibros.setRowCount(0);
           //obtener los libros de la BD
           var Libros = libroServicio.ListarLibros();
           //interamos cada libro
           Libros.forEach((libro) -> {//funcion lambda
               //creamos cada registro para agregarlos a la tabla
               Object [] renglonLibro = {
                 libro.getIdLibro(),
                 libro.getNombreLibro(),
                 libro.getAutor(),
                 libro.getPrecio(),
                 libro.getExistencias(),
               };
            this.tableModeloLibros.addRow(renglonLibro);
           });
       }
    }

}
