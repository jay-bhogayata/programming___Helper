export const datas = [
    {
      name: "program",
      input: `<pre>
      import java.util.*;
  
      class Scan{
      
          public static void main(String[] args){
      
              Scanner sc = new Scanner(System.in);
              System.out.println("Enter number here : ");
              int a = sc.nextInt();
              System.out.println("Given Number is " + a);
      
              System.out.println("Enter float number here : ");
              float b = sc.nextFloat();
              System.out.println("given float number is " + b);
      
              System.out.println("Enter your name : ");
              String name = sc.next();
              System.out.println("your name is :" + name);
      
              sc.close();
      
          }
      
      }
  
      </pre>`,
      output: `Enter number here : 
      12
      Given Number is 12
      Enter float number here : 
      23.23
      given float number is 23.23
      Enter your name : 
      jay
      your name is :jay
      `,
    },
    
    
    
    
    
    
    
    
    
    
    
    
    {
      name: "program2",
      input: "let a = 10 ",
      output: "true",
    },

    {
        name : "program3",
        input : "let abc = 112",
        output : "dkjw"
    }


  ];
