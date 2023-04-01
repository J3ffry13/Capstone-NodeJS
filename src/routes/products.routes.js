import { Router } from "express";

import {
  login, opbtenerPermisos
} from "../controllers/seguridad.controller";

import {
  listadoCombos
} from "../controllers/utils.controller";

import { listadoTrabajadores, obtenerContratos, crea_edita_PersonasTrabajador, elimina_PersonasTrabajador}
from "../controllers/configuracion.trabajadores.controller"

import { listadoActividades, crea_edita_Actividades, elimina_Actividades}
from "../controllers/configuracion.actividades.controller"

import {listadoGruposTrabajo, obtenerTrabajadores, crea_edita_Grupo_Trabajo,elimina_Grupo_Trabajo} 
from '../controllers/configuracion.gruposTrabajo.controller'

const router = Router();

/*                  LOGIN                  */
router.post("/login", login);
router.post("/obtenerPermisos", opbtenerPermisos);
/*-----------------------------------------*/
/*                  -----                  */
/*       CONFIGURACIÓN - TRABAJADORES      */
router.post("/configuracion/listarPersonasTrabajadores", listadoTrabajadores);
router.post("/configuracion/obtenerContratosTrabajadores", obtenerContratos);
router.post("/configuracion/creaeditaPersTrab", crea_edita_PersonasTrabajador);
router.put("/configuracion/eliminaPersTrab", elimina_PersonasTrabajador);
/*-----------------------------------------*/
/*                  -----                  */
/*       CONFIGURACIÓN - ACTIVIDADES       */
router.post("/configuracion/listadoActividades", listadoActividades);
router.post("/configuracion/crea_edita_Actividades", crea_edita_Actividades);
router.put("/configuracion/elimina_Actividades", elimina_Actividades);
/*-----------------------------------------*/
/*                  -----                  */
/*      CONFIGURACIÓN - GRUPO TRABAJO      */
router.post("/configuracion/listadoGruposTrabajo", listadoGruposTrabajo);
router.post("/configuracion/obtenerTrabajadores", obtenerTrabajadores);
router.post("/configuracion/creaeditaGruposTrabajo", crea_edita_Grupo_Trabajo);
router.put("/configuracion/eliminaGruposTrabajo", elimina_Grupo_Trabajo);
/*-----------------------------------------*/

/*                  -----                  */


/*                 COMBOS                  */
router.post("/utils/listadoCombos", listadoCombos);

/*                  -----                  */
export default router;
