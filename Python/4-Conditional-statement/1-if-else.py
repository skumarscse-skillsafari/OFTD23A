# 1. Grade Classification:
#    Consider a scenario where you're tasked to classify students' grades based on their scores. If the score is between 90 and 100, print "A"; between 80 and 89, print "B"; 70-79 as "C"; 60-69 as "D"; below 60 as "F".

# 2. Discount Calculation:
#    You are creating a program for a store. If a customer's total bill is above $100, apply a 10% discount; if it's between $50 and $100, apply a 5% discount; otherwise, no discount is applied.

# 3. Weather Adviser:
#    Create a program that gives weather advice based on user input. If the weather is "sunny," print "Remember to wear sunscreen." If it's "rainy," print "Don't forget your umbrella." For any other weather condition, print "Enjoy your day!"

# 4. Job Application Screening:
#    Design a program that screens job applicants. If an applicant's experience is more than 5 years, print "Qualified"; if it's between 2 and 5 years, print "Considerable"; if less than 2 years, print "Not qualified."

# 5. Menu Selection:
#    You're building a program for a restaurant menu. If the user selects "1", print "You've chosen a burger"; if "2", print "You've chosen pizza"; for "3", print "You've chosen salad"; and for any other input, print "Invalid choice."

# 6. Time Converter:
#    Create a program that converts hours into minutes or minutes into hours based on user input. If the user chooses "1", convert hours to minutes; if "2", convert minutes to hours.

# 7. Ticket Pricing for a Theme Park:
#    A theme park has different ticket pricing based on age. If the visitor is under 12, the ticket costs $10; between 12 and 18, it costs $15; and above 18, it's $20.

# 8. Travel Fare Calculator:
#    Build a program for a transportation company. If the user is below 5 years old, their fare is free; between 5 and 12, the fare is $10; between 12 and 60, the fare is $20; and above 60, the fare is $15.

# 9. Library Book Rental:
#    A library charges fines for late book returns. If a book is returned within 7 days, no fine is charged; between 7 and 14 days, $2/day; and over 14 days, $5/day.

# 10. Health Check:
#     Create a health program that takes a user's BMI (Body Mass Index) as input. If the BMI is less than 18.5, print "Underweight"; between 18.5 and 24.9, print "Normal"; between 25 and 29.9, print "Overweight"; and above 30, print "Obese".

# if statement
# Syntax
# if condition:
#       // if statements/block

# if 20 < 10:
#     print("One")
#     print("Two")
# print("Three")
# print("Four")
# print("Five")
# print("Six")
# print("Seven")
# print("Eight")
# print("Nine")
# print("Ten")

# firstName = "John"
# lastName = "Jack"
# if True:
#     print(f"Fullname is: {firstName}, {lastName}")

# Find the given character is "vowels" or "consonant"
# input => "a"
# vowels => a, e, i, o, u
# input => b
# b == a b == e b == i
# value = input("Enter any alpha character: ")
# if value == "a" or value == "e" or value == "i" or value == "o" or value == "u":
#     print("Vowels")
# else:
#     print("Not vowel")

# Syntax
# if-else
# if condition: True
#       if statement/block
# else:
#       else statememt/block

# False = 0 = None = ""
# username = input("Enter username: ")
# if username:  # "John"
#     print(f"Welcome, {username}")
# else:
#     print(f"Welcome, Guest")

# Find a number is "odd" or "even"
# number = int(input("Enter any number: "))
# if number % 2 == 0:
#     print(f"User entered number: {number} is EVEN")
# else:
#     print(f"User entered number: {number} is ODD")
# if number % 2:
#     print(f"User entered number: {number} is ODD")
# else:
#     print(f"User entered number: {number} is EVEN")

# Find the given substring is in the string or not
# Python is a high-level, general-purpose programming language.
# subString = input("Enter a substring: ")
# baseString = "Python is a high-level, general-purpose programming language."
# if subString.lower() in baseString.lower():
#     print(f"User entered substring: {subString} is in baseString")
# else:
#     print(f"User entered substring: {subString} is not in baseString")

# Nested if (if - ifel)
# Syntax
# if condition-1:
#   condition-1 statement/block
# elif condition-2:
#   condition-2 statement/block
# elif condition-3:
#   condition-3 statement/block
# else:
#   else statement

if 2 > 5:
    print("Condition - 1")
elif 3 > 9:
    print("Condition - 2")
elif 5 > 10:
    print("Condition - 3")
elif "Hello":
    print("Condition - 4")
else:
    print("Else statement")

# Find heighest of "3" numbers
# numOne, numTwo, numThree
# numOne = int(input("Enter number - 1: "))
# numTwo = int(input("Enter number - 2: "))
# numThree = int(input("Enter number - 3: "))
# if numOne > numTwo and numOne > numThree:
#     print(f"Number: {numOne} is highest")
# elif numTwo > numOne and numTwo > numThree:
#     print(f"Number: {numTwo} is highest")
# else:
#     print(f"Number: {numThree} is highest")
