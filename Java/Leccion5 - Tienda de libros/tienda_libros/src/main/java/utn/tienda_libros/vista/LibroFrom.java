<<<<<<< HEAD
package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

@Component
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable TablaLibro;
    private DefaultTableModel tableModeloLibros ;

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
        // TODO: place custom component creation code here
    }
}
=======
package utn.tienda_libro.vista;

import javax.swing.*;

public class LibroFrom extends JFrame{
      
}
   
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 400, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 300, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    // End of variables declaration//GEN-END:variables

>>>>>>> 72ef36647e65d0f5908a8d9668b216d0318d7995
