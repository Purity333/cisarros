# Proyecto Cisarros

Este proyecto es un sistema de ventas completo orientado para cigarrillos, realizado a lo largo de dos meses como proyecto evaluativo.


## Requisitos

- Python 3.10+
- pip
- Git

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/repositorio.git
cd cisarros\cisarros\cisarros front
```

2. Crear y activar entorno virtual:

```bash
python -m venv venv
venv\Scripts\activate
```

3. Instalar dependencias:

```bash
pip install -r requirements.txt
```

4. Ejecutar migraciones y levantar el servidor:

```bash
python manage.py migrate
python manage.py runserver 9020
```

##  Estructura del Proyecto

- `cliente/`: Módulo para gestión de clientes.
- `jefe/`: Módulo para usuarios tipo jefe.
- `db.sqlite3`: Base de datos local.

##  Colaboración en GitHub

- Uso de ramas por funcionalidad (`feature/`)
- Kanban board en GitHub Projects
- Versionado con etiquetas (`tags`)
- Pull requests y revisiones entre colaboradores

---

Proyecto realizado por: Camilo Salinas y Esteban Rojel.
