#NaN (NOT A NUMBER)
from decimal import Decimal

a = float('NaN')
print(f'a: {a}')

#modulo math
a = float('nan')
print(f'Es de tipo NAN(not a number): {math.isnan(a)}')


#modulo decimal
a = Decimal('NaN')
print(f'Es de tipo NAN(not a number): {math.isnan(a)}')