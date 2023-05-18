import { Router } from "express";

import {
  login, opbtenerPermisos
} from "../controllers/Seguridad/seguridad.controller";

import {
  listadoCombos
} from "../controllers/Common/utils.controller";

import { listadoTrabajadores, obtenerContratos, crea_edita_PersonasTrabajador, elimina_PersonasTrabajador}
from "../controllers/Configuracion/configuracion.trabajadores.controller"

import { listadoActividades, crea_edita_Actividades, elimina_Actividades}
from "../controllers/Configuracion/configuracion.actividades.controller"

import {listadoGruposTrabajo, obtenerTrabajadores, crea_edita_Grupo_Trabajo,elimina_Grupo_Trabajo} 
from '../controllers/Configuracion/configuracion.gruposTrabajo.controller'

import {listadoAsignacionLabores, crea_edita_AsignacionLabores, elimina_AsignacionLabores} 
from '../controllers/Procesos/procesos.asignacionLabores.controller'

import {obtenerTrabajador, crea_edita_RegistroAsistencia} 
from '../controllers/Asistemcia/asistencia.registroAsistencias.controller'
import { listadoEgresos, crea_edita_Egresos, elimina_Egresos } from "../controllers/Finanzas/finanzas.egresos.controller";
import { listadoIngresos, crea_edita_Ingresos, elimina_Ingresos } from "../controllers/Finanzas/finanzas.ingresos.controller";

import { listadoDashboard } from "../controllers/Reportes/dashboard.controller";

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
/*      PROCESOS - ASIGNACIÓN LABORES      */
router.post("/procesos/listadoAsignacionLabores", listadoAsignacionLabores);
router.post("/procesos/crea_edita_AsignacionLabores", crea_edita_AsignacionLabores);
router.put("/procesos/elimina_AsignacionLabores", elimina_AsignacionLabores);
/*-----------------------------------------*/
/*                  -----                  */
/*    ASISTENCIAS - REGISTRO ASISTENCIA    */
router.post("/asistencias/obtenerTrabajador", obtenerTrabajador);
router.post("/asistencias/creaeditaRedistroAsistencia", crea_edita_RegistroAsistencia);
/*-----------------------------------------*/
/*                  -----                  */
/*           FINANZAS - INGRESOS           */
router.post("/finanzas/listadoIngresos", listadoIngresos);
router.post("/finanzas/crea_edita_Ingresos", crea_edita_Ingresos);
router.put("/finanzas/elimina_Ingresos", elimina_Ingresos);
/*-----------------------------------------*/
/*                  -----                  */
/*           FINANZAS - EGRESOS            */
router.post("/finanzas/listadoEgresos", listadoEgresos);
router.post("/finanzas/crea_edita_Egresos", crea_edita_Egresos);
router.put("/finanzas/elimina_Egresos", elimina_Egresos);
/*-----------------------------------------*/
/*                  -----                  */
/*           FINANZAS - INGRESOS           */
router.get("/reportes/listadoDashboard", listadoDashboard);


/*                 COMBOS                  */
router.post("/utils/listadoCombos", listadoCombos);

/*                  -----                  */
export default router;
/*IMPLEMENTAR JOBS PARA CONTRATOS Y REGULAR LÑAS ASISTENCIAS XDD */