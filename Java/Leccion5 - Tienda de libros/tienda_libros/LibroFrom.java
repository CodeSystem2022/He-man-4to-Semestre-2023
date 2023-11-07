modificarButton.addActionListener(e -> modificarLibro());
eliminarButton.addActionListener(e -> eliminarLibro());



private void eliminarLibro(){

	var renglon = tablaLibros.getSelectedRow();
	if (renglon != -1){

		String idLibro = 
					tablaLibros.getModel().getValueAt(renglon, 0).toString();
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