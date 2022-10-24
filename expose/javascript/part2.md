12. Given the above Object, write the notation for

  A. Accessing the value of the name property in the student object: 
    student.name
    
  B. Accessing the value of the Grad Year property in the student object: 
    student["Grad Year"]
    
  C. Calling the function for the greeting property in the student object: 
    student.greeting(); 
    
  D. Accessing the name property of the object in the Favorite Teacher property in student: 
    student["Favorite Teacher"].name
    
  E. Access index zero in the array of the courseLoad property of the student object: 
    student.courseLoad[0]
    
13. Arithmetic
 
 A. ‘3’ + 2: 
      32
      
  B. ‘3’ - 2: 
      1
      
  C. 3 + null: 
      3
      
  D. ‘3’ + null: 
      3null
      
  E. true + 3: 
      true3
      
  F. false + null: 
      0
      
  G. '3' + undefined: 
      3undefined
      
  H. '3' - undefined: 
      NaN
      
14. Comparison
  A. ‘2’ > 1: 
      true
      
  B. '2' < '12': 
      false
      
  C. 2 == '2': 
      true
      
  D. 2 === '2': 
      false
      
  E. true == 2: 
      false
      
  F. true === Boolean(2): 
      true
      
15. Explain the difference between the == and === operators.
    '==' compares values, while '===' compares object equality, which determines whether the references point to the same objects.
        
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
 The function produces the array "[2, 4, 6]" which is applying the doSomething on the given array since the code is looping through the array and calling doSomething as callback then pushing the new value from callback into the 'newArr'.
 
