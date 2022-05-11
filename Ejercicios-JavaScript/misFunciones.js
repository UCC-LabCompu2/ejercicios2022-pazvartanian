/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades (this.id, this.value) {
    if (isNaN(valor)){
        alert("Se agrego un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
    document.lasUnidades.unid_pie.value = 3.28084*valor;
    document.lasUnidades.unid_yarda.value = 1.09361*valor;
}
}
