'use strict';
/* Clase estandard de respuesta para API */

module.exports = class Respuesta {
  constructor() {
    this.correcto = false;
    this.mensaje = '';
    this.data = [];
    this.errorDetalles;
    this.statusClass = 'info';
  }
  toSuccess(r) {
    this.correcto = true;
    this.statusClass = 'success';
    if (r) {
      if (!r instanceof Array) {        
        this.mensaje = r.dataValues.mensaje;
        delete r.dataValues.mensaje;
      }
    }
  }
  toWarning() {
    this.correcto = false;
    this.statusClass = 'warning';
    this.mensaje = 'Cuidado, el proceso no fue completamente satisfactorio.';
  }
  toError(error) {
    this.correcto = false;
    this.statusClass = 'danger';
    this.mensaje = 'Ocurrió un error inesperado. Por favor intente de nuevo más tarde.';
    if (error) {
      this.errorDetalles = error.name + ': ' + error.message;
    }
  }
};