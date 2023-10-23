import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicios.LibrosServicio;

import javax.swing.*;
import java.awt.*;

@Component
public class LibroFrom extends JFrame{
	LibroServicio libroServicio;
	private JPanel panel;

	@Autowired
	public LibroFrom(LibrosServicio libroServicio){
		this.libroServicio = libroServicio;
		iniciarForma();
	}
}

private void iniciarForma(){
	setContentPane(panel);
	setDefaultCloseOperation(JFrmae.EXIT_ON_CLOSE);
	setVisible(true);
	setSize(900, 700);
	// Para obtener las dimenciones de la ventana
	Toolkit toolkit = Tollkit.getDefaultToolkit();
	Dimension tamanioPantalla = toolkit.getScreenSize();
	int x = (tamanioPantalla.width - getWidth()/2);
	int y = (tamanioPantalla.height - getHeight()/2);
	setLocation(x,y);
}