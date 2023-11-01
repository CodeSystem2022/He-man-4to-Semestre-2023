import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import { TareasProvider } from "./context/tareasContext";

import { Router, Route, outlet } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from " ./pages/ResgisterPage";
import ProfilePage from "./pages/ProfilePage";
import Tareaspage from "./pages/TareasPage";
import TareasFormPage from "./pages/TareasFormPage";
import NotFound from "./pages/NotFound";

function App() {


	const { isAuth, loading } = useAuth();
	if (loading){
		setTimeout(() => {
			return <h1> cargando...</h1>;
		}, 1000);
	}

	return (
		<>
			<Navbar />
			<Container className="py-5">
			<Router>
				<Route element= {<ProtectedRoute isAllowed={isAuth} redirecTo="tareas" />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>
			<Route element={<ProtectedRoute isAllowed={isAuth} redirecTo="/login" />}>
				<Route path="perfil" element={<ProfilePage />} />


				<Route element={<TareasProvider>
					<Outlet />
				</TareasProvider>}>
					<Route path="/tareas" element={-TareasPage />} />
					<Route path="/tareas/crear" element={<TareasFormPage />} />
					<Route path"/Tareas/editar/:id/editar" element{<TareasFormPage />} />
				</Route
			</Route>

			<Route path"*" element={<NotFound />} />
			</Route>
			</Container>
		</>
	):
};