import "./globals.css";

export const metadata = {
  title: "ISTE",
  embade: "ISTE VIT",
  description:
    "ISTE-VIT is a reputed visionary non-profit organisation determined to impart technical knowledge to inspire solutions with innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://istevit.in" />
        {/* <link
          rel="shortcut icon"
          type="ico"
          href="https://res.cloudinary.com/dleuqns7p/image/upload/v1730318429/rbjnces73klbyukr59y5.ico"
        /> */}
        <meta
          property="og:image"
          content="https://i.ibb.co/SQW9cnV/metaiste.png"
        />
      </head>
      <body className="font-anton min-h-screen flex flex-col justify-between">
        {children}
        {/* Lord Shankar */}
        {/* Harsh Kumar Single */}
        {/* Peter Palker Was Here */}
        {/* Cj Was Here */}
        {/* BurntDosa */}
        {/* For You for finding this */}
        {/*                          
                            .-=+*#%%%%%#*=:                                       
                        .=*@@@@@%#*++**#@@@@#=.                                
                      :#@@@#=:.          .=#@@@*:                                   
                    :#@@#-                  .=%@@*.                         
                   -@@@-                       =@@@+                        
                  :@@%.           +#-            #@@+               
                  *@@-           :@@*      +@%.   #@@-               
                  %@@.        .:. :-       %@%    .@@%                       
                 .@@%        .::.          .:      @@@                                    
                  @@@           =%#.         .:.  .@@%                                    
                  *@@=          =@@*      -=::::  *@@=                 :==-.              
                  .%@@=          #@@*---*@@@+    =@@#            .---:=*****.             
                   .#@@%=.        =%@@@@@%+.   -#@@#.           =***********:             
                     =@@@@=          .:.    .+@@@%-             *******+++**++++-         
                 .=*%@@@@+                  -@@@@@@%+-          .+****+====*****+         
             .-+%@@@#+:.                       :=+*%@@@*-.      -******+++******.         
           -#@@@@*:                                 .+@@@@#+:   +******+********=         
         -%@@@*:                                       :=*%@@@%+====-:----+*****=         
       :#@@#+:                                             .-+%@@@#=..--:                 
      +@@%-                                                    .-*@@@*--:                 
    .%@@*                                      :*+=:               -*#---                 
   :@@@-            :-.                        -#@@@@%*-.            :--*%:               
  .@@@:            #@@@@:                         =@@@@@@%=:         ---%@%               
  #@@-           .%@@@@+                          =@@+ -*@@@@#+-:.   --=@@@.              
 :@@#           =@@@@@%                           *@@-    :=*%@@@@@@%--=@#-               
 *@@-         -%@@*#@@=                           %@@.         .:-==+::.                  
 %@@.       -%@@#-.@@@                            @@%                                     
 #@@:     -%@@#:  :@@#                           :@@#                                     
 -@@%-:-+%@@#:    =@@=                           :@@*                                     
  -#@@@@@%+:      #@@:                           -@@*                                     
    .:::.         %@@.                           =@@+                                     
                 .@@%                            +@@=                                     
                 -@@*                            +@@-  */}
      </body>
    </html>
  );
}
