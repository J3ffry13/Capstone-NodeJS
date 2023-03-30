import { Router } from "express";

import {
  login
} from "../controllers/seguridad.controller";
import {
  listadoCombos
} from "../controllers/utils.controller";
import { listadoTrabajadores, obtenerContratos, crea_edita_PersonasTrabajador, elimina_PersonasTrabajador}
from "../controllers/configuracion.trabajadores.controller"

const router = Router();

/*                  LOGIN                  */
router.post("/login", login);

/*                  -----                  */
/*       CONFIGURACIÓN - TRABAJADORES      */
router.post("/configuracion/listarPersonasTrabajadores", listadoTrabajadores);
router.post("/configuracion/obtenerContratosTrabajadores", obtenerContratos);
router.post("/configuracion/creaeditaPersTrab", crea_edita_PersonasTrabajador);
router.put("/configuracion/eliminaPersTrab", elimina_PersonasTrabajador);


/*                  -----                  */


/*                 COMBOS                  */
router.post("/utils/listadoCombos", listadoCombos);

/*                  -----                  */
export default router;
