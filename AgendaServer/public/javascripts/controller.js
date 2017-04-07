/**
 * Define el controlador para la agenda y el modelo inicial.
 */
var AgendaController = function($scope) {
  $scope.personas = [
    {nombre: "Jose Fuentes", telf: 555123123},
    {nombre: "Bianca Caminiti", telf: 555111222},
    {nombre: "Casa", telf: 555222333}
  ];

  /**
   * Introducir un nuevo contacto en la agenda.
   */
  $scope.save = function() {
    $scope.personas.push({
      nombre: $scope.nuevoContacto.nombre,
      telf: $scope.nuevoContacto.telf
    });
    $scope.nuevoContacto.nombre = '';
    $scope.nuevoContacto.telf = '';
    $scope.formVisibility = false;
  };

  // Variable que permite conmutar la visibilidad del formulario.
  $scope.formVisibility = false;

  /**
   * Muestra el formulario que permite añadir un nuevo contacto.
   */
   $scope.showForm = function() {
     $scope.formVisibility = true;
   };
};

// Carga la aplicación y establece un controlador.
var app = angular.module('AgendaApp', []);
app.controller('AgendaController', AgendaController);
