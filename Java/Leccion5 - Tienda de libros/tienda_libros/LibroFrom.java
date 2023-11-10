modificarButton.addActionListener(e -> modificarLibro());
eliminarButton.addActionListener(e -> eliminarLibro());



private void eliminarLibro(){

	var renglon = tablaLibros.getSelectedRow();
	if (renglon != -1){

		String idLibro = tablaLibros.getModel().getValueAt(renglon, 0).toString();
		idTexto.setText(idLibro);

		String nombreLibro = tablaLibros.getModel().getValueAt(renglon,1).toString();
		libroTexto.setText(nombreLibro);

		String autor = tablaLibros.getModel().getValueAt(renglon, 2).toString();
		autorTexto.setText(autor);

		String precio = tablaLibros.getModel().getValueAt(renglon, 3).toString();
		precioTexto.setText(precio);

		String exstencias = tablaLibros.getModel().getValueAt(renglon, 4).toString();
		existenciasTexto.setText(exstencias);

		var libro = new Libro();
		libro.setIdLibro(Integer.parseInt(idLibro));
		libroServicio.eliminarLibro(libro);
		mostrarMensaje("Libro "+ idLibro+" ELIMINADO");
		limpiarFormulario();
		listarLibros();
	}else{

		mostrarMensaje("NO se ha seleccionado ningun libro de la tabla a eliminar");
	}
}