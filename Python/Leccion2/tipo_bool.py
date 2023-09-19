
# Bool contiene los valores de True y False
# Los tipos numericos, es false para el 0 (cero), true para los demas valores

valor = 0
resultado = bool(valor)
print(f' valor: {valor}, resultado: {resultado}')


valor = 0.1
resultado= bool(valor)
print(f' valor: {valor}, resultado: {resultado}')


# Tipo string -> False '', True demas valores
valor = ''
resultado = bool(valor)
print(f' valor: {valor}, resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f' valor: {valor}, resultado: {resultado}')
