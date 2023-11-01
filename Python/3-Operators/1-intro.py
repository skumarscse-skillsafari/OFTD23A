# Addition, Subtraction, multiplication, division, modulo
# numOne = 10
# numTwo = 3
# print(numOne)
# print(numTwo)
# print("--------")
# # Addition
# print("Addition")
# print(numOne + numTwo)
# print("---------")
# # Subtraction
# print("Subtraction")
# print(numOne - numTwo)
# print("---------")
# # Multiplication
# print("Multiplication")
# print(numOne * numTwo)
# print(numOne**numTwo)
# print("---------")
# # Division
# print("Division")
# print(numOne / numTwo)
# print(numOne // numTwo)
# print("---------")
# # Modulo
# print("Modulo")
# print(numOne % numTwo)
# print("---------")

# Comparison operators - Boolean - True/False
# Greaterthan, Lessthan, Equals, NotEquals, Greaterthan or Equals, Lessthan or Equals
# Greaterthan - ">"
# print("Greaterthan")
# print(10 > 20)
# print(20 > 5)
# print("----------")


# Lessthan - "<"
# print("Lessthan")
# print(12 < 20)
# print(100 < 15)
# print("----------")


# Equals - "=="
# print("Equals")
# print(10 == 4)
# print(4 == 4)
# print("----------")


# NotEquals - "!="
# print("NotEquals")
# print(10 != 4)
# print(4 != 4)
# print("----------")


# Greaterthan or Equals - ">="
# print("Greaterthan or Equals")
# print(10 >= 10)
# print(20 >= 30)
# print("----------")


# Lessthan or Equals - "<="
# print("Lessthan or Equals")
# print(10 <= 10)
# print(100 <= 10)
# print("----------")

# Operator precedence
# BODMAS => Brackets, Division, Multiplication, Addition, Subtraction
# 2 + (4 * 3) / 20 - 2
# 2 + 12 / 20 -2
# 2 + 0.6 - 2
# 2.6 - 2
# 0.6

# Logical Operators
# 0 === False === "" === None
print(type(None))
# AND, OR, NOT
# AND, OR - Binary operator - min. two operands
# NOT - Unary operator - one operand

# Operator and Operands
# 10 + 20

# AND - and
# (10 > 20) and (20 < 3)
# False     and False
# OperandOne    OperandTwo  Result
#   True           True     True
#   True           False    False
#   False          True     False
#   False          False    False

# print((30 > 20) and (20 < 50))
# print((30 > 20) and (20 < 10))
# print((30 > 50) and (20 < 50))
# print((30 > 50) and (20 < 10))

# Looks for first "falsy" value and return its original value. Will not evaluate further operands
# If none of the operand turns "false", it return last operand original value
# print((2 > 1) and (10 > 5) and (3 < 1) and (20 > 10))
# print((2 > 1) and (10 > 5) and "Hello" and 10)
# print((2 > 1) and (10 > 5) and "Hello" and 2 > 1)
# print((2 > 1) and (10 > 5) and "Hello" and "False")

# Short-circuit
# First operand "False", return operandOne actual value
# First operand "True", return operandTwo actual value
# print((10 > 1) and (2 > 3))
# print((2 > 3) and (10 < 1))

# print((10 > 1) and "Hello")
# print((10 < 1) and "Hello")
# print(0 and "Hello")


# OR - or
# (50 > 20) or (20 < 3)
# True     or False
# OperandOne    OperandTwo  Result
#   True           True     True
#   True           False    True
#   False          True     True
#   False          False    False

# print((30 > 20) or (20 < 50))
# print((30 > 20) or (20 < 10))
# print((30 > 50) or (20 < 50))
# print((30 > 50) or (20 < 10))

# Looks for first "truthy" value and return its original value
# If none of the operand turns "True", return last operand actual value
# print(" " or False or 0 or False)
# print("" or "Demo" or 0 or False)

# Short-circuiting
# If first operand is "True" return its original value
# If first operand is "False" return second operands original value
# print("Hello" or "World")
# print(None or "World")

# Not - Unary operator
# Operand   Result
#   True    False
#   False   True

# print(not 20 > 10)
# print(not 20 < 10)
