import { Router } from "express";

import {
  login
} from "../controllers/seguridad.controller";
import {
  listadoCombos
} from "../controllers/utils.controller";
import { listadoTrabajadores, obtenerContratos}
from "../controllers/configuracion.trabajadores.controller"

const router = Router();

/*                  LOGIN                  */
router.post("/login", login);

/*                  -----                  */
/*       CONFIGURACIÓN - TRABAJADORES      */
router.post("/configuracion/listarPersonasTrabajadores", listadoTrabajadores);


/*                  -----                  */


/*                 COMBOS                  */
router.post("/utils/listadoCombos", listadoCombos);

/*                  -----                  */
export default router;
