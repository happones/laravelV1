# laravelV1
Protocolo de Entrevista
Duración: 2 horas 
Proctor Jesús Fragoso
Evaluación Remota

NOTA: Su aplicación será probada en Homestead con Vagrant. No es necesario entregar un archivo de tipo Vagrant para crear la máquina virtual, así como tampoco es necesario desplegar obligatoriamente en Homestead. Si desea realizar este paso, es opcional. 

 OBJETIVOS 
	PRINCIPAL
Crear proyecto en Vue y Laravel 
Implementar CRUD .
Escribir en Base de Datos.
Subir proyecto a Repositorio

SECUNDARIO 
TDD
Crear un plan de pruebas TDD para una clase o ruta. Mostrar el plan de pruebas implementando
Repositorio
Generar problema en Github y resolverlo 

El siguiente sistema, registra personas y las muestra en una lista. 
Crear componente en vue que esté conectado a un API qué haga RUD. Es decir, qué lea, actualice y elimine. 
Crear componente en vue que  registre personas. 
El sistema incluye paginación y búsqueda

NECESARIO
Plantilla de vue que realiza operaciones con Laravel(CRUD) y escriba en una base de datos
Subir Código a Repositorio
OPCIONAL
Paginación
Búsqueda
TDD
Repositorio [ Generación de Error ]
Repositorio 
https://github.com/jfragoso18/laravelV1  [PRIVADO]
El error que deberá ocasionar, en caso de querer llevarlo a cabo. Es hacer un push de un repositorio vacío que  sobrescriba los datos del repositorio. 
Consejo: Utilice git revert y un branch para regresar al estado anterior. 

Demo Muestra
Pantalla 1. CRUD


Pantalla 2. Creación de Persona

La persona tiene
Índice
Nombre
Foto de perfil
Correo
Fecha de nacimiento




Método de prueba para Repositorio

Se espera que el candidato proporcione la aplicación empaquetada en modo de desarrollo. La aplicación debe estar en el repositorio indicado. Se evaluará funcionalidad indicada, así como el código qué esté propuesto. Esta prueba no mide sus capacidades para usar mejores prácticas, sin embargo, se exhorta a usarlas y escribir código limpio. 

El proctor hará un pull del repositorio modificado a las 10:00 pm. Y lo probará en un ambiente Homestead con Vagrant en una base de datos limpia. Se migrará la información de los esquemas de datos que el candidato proporcione. 

Comandos del proctor

composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
En caso de que su aplicación requiera de alguna instrucción especial. Favor de indicarlo en su correo. 





