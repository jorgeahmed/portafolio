import random
import subprocess


def saludar(nombre):
    # Antes: os.system("echo Hola, " + nombre) -- CWE-78 (inyeccion de
    # comandos). Corregido: lista de argumentos a subprocess.run, sin shell
    # -- el SO nunca interpreta el contenido de `nombre` como codigo.
    return subprocess.run(["echo", "Hola,", nombre], capture_output=True)


def generar_token_sesion():
    # CWE-330 (severidad media en NP Auditor): random.choice() no es
    # criptograficamente seguro para un token de sesion -- deberia usar
    # el modulo `secrets`. Se deja a proposito para mostrar el estado
    # "neutral" del check (hallazgo real, pero no de severidad alta).
    caracteres = "abcdefghijklmnopqrstuvwxyz0123456789"
    return "".join(random.choice(caracteres) for _ in range(16))
