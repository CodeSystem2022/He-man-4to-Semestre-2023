package utn.tienda_libros.servicio;

import utn.tienda_libros.modelo.Libro;

import java.util.List;

@service
public class LibroServicio implements IlibroServicio{

	@Autowired
	private LibroRepositorio  libroRepositorio;

	@override
	public List<Libro> listarLibros(){
		return libroRepositorio.findAll();
	}
	@override
	public Libro buscarLibroPorid (Integer idLibro){
		Libro libro = libroRepositorio.findById(idlibro).orElse(null);
		return libro;
	}

	@override
	public Libro guardarLibroPorid (Libro Libro){
		libroRepositorio,save(libro);
	}

	@override
	public Libro guardarLibroPorid (Libro Libro){
		libroRepositorio,delete(libro);
	}

}
    
    
}
