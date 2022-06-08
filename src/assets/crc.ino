//Implement de CRC error detection with the P(X) =x^5 + x^2 + x + 1  , at the Rx and Tx
//P = 100111
//P = 


void setup() {
  Serial.begin(9600); //
  // put your setup code here, to run once:
 
}
int i;
void loop() {
  
  int P = 9; //Sec predeterminada: 00000000 00001001 = x^3 + 1
  int Prec;
  int numberBitsMessage;
  int message = 80; //DEBE SER LEÍDO DESDE EL SENSOR
  int pMSB;
  int messageMSB;
  //String messageToTransmit = message + ;
  //byte plain[message.length()];
  //message.getBytes(plain, message.length());
  
 
  Serial.print("Mensaje: ");
  Serial.println(message);
  //Serial.println(message, HEX);
  Serial.println(message, BIN);
  //Serial.println(message, DEC);
 
  Serial.print("P: ");
  Serial.println(P);
  //Serial.println(message, HEX);
  Serial.println(P, BIN);
   Serial.println("");
  int message2 = message << 3; //recorremos a la izq 3 bits de acuerdo a la sec pred. P=1001 (polinomio grado 3)
  
  Serial.println("Mensaje recorrido: ");
  //Serial.println(message2);
  //Serial.println(message2, HEX);
  Serial.println(message2, BIN);
  //Serial.println(message2, DEC);
  Serial.println("");

  for( i=15; i >= 0;i--){ //int tiene 16 bits
    //Serial.print("Bit "); Serial.print(i); Serial.print(" del mensaje es: "); Serial.println(bitRead(message2,i));
    //Serial.println(i);
    if(bitRead(message2,i) == 1)
      {
        Serial.println("Se detectó bit 1");
        Serial.print("El bit ");
        messageMSB = i+1;
        Serial.print(i+1);
        Serial.println(" es el MSB de message");
        Serial.print("El número de bits del mensaje son: ");
        Serial.print(i+1);
        i=0;

      }    
  }
  i=0;
   Serial.println("");
  for( i=15; i>=0;i--){ //int tiene 16 bits
    //Serial.print("Bit "); Serial.print(i); Serial.print(" de P es: "); Serial.println(bitRead(P,i));
    if(bitRead(P,i) == 1)
      {
        Serial.println("Se detectó bit 1");
        Serial.print("El bit ");
        pMSB = i+1;
        Serial.print(i+1);
        Serial.print(" es el MSB de P");
        Serial.print("El número de bits de la P son: ");
        Serial.print(i+1);
        i=0;

      }
 
    
  }

 ///////////////////////////////////EMPIEZA ALGORITMO CRC
 Serial.println("");
  int CRC = message2; //crc =fcs  00000000 1000000;
  int sumaXOR = 0;//bin 00000000 0000000;

  
  P = P << messageMSB-pMSB; //Recorrer la sec predeterminada a la Izq hasta el bit MSB del mensaje menos el MSB de la P
  
  Serial.print("Secuencia predeterminada recorrida: "); 
  Serial.println(P,BIN); 
 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     for( i=15; i >= 0;i--){ //int tiene 16 bits
  
      if(bitRead(CRC,i) == 1)
        {
          Serial.println("Se detectó bit 1");
          Serial.print("El bit ");
          //messageMSB = i+1;
          numberBitsMessage = i+1;
          //Serial.print(i+1);
          //Serial.println(" es el MSB de message");
          //Serial.print("El número de bits del mensaje son: ");
          //Serial.print(numberBitsMessage);
          i=0;
  
        }    
    }

    Serial.print("El número de bits del mensaje son: ");
    Serial.println(numberBitsMessage);
    Prec = P >> messageMSB - numberBitsMessage;
    Serial.print("P:");
    Serial.println(Prec,BIN);
    CRC = CRC ^ Prec;   
    Serial.println(CRC,BIN);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //numberBitsMessage = 8;// HACER: FUNCIÓN QUE CALCULE EL NÚMERO DE BITS HASTA EL MSB
     for( i=15; i >= 0;i--){ //int tiene 16 bits
   
      if(bitRead(CRC,i) == 1)
        {
          Serial.println("Se detectó bit 1");
          Serial.print("El bit ");
          //messageMSB = i+1;
          numberBitsMessage = i+1;
          //Serial.print(i+1);
          //Serial.println(" es el MSB de message");
          //Serial.print("El número de bits del mensaje son: ");
          //Serial.print(numberBitsMessage);
          i=0;
  
        }    
    }
    Serial.print("El número de bits del mensaje son: ");
    Serial.println(numberBitsMessage);
    Prec = P >> messageMSB - numberBitsMessage;
    Serial.print("P:");
    Serial.println(Prec,BIN);
    CRC = CRC ^ Prec;
    Serial.println(CRC,BIN);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //numberBitsMessage = 8;// HACER: FUNCIÓN QUE CALCULE EL NÚMERO DE BITS HASTA EL MSB
     for( i=15; i >= 0;i--){ //int tiene 16 bits
   
      if(bitRead(CRC,i) == 1)
        {
          Serial.println("Se detectó bit 1");
          Serial.print("El bit ");
          //messageMSB = i+1;
          numberBitsMessage = i+1;
          //Serial.print(i+1);
          //Serial.println(" es el MSB de message");
          //Serial.print("El número de bits del mensaje son: ");
          //Serial.print(numberBitsMessage);
          i=0;
  
        }    
    }
    Prec = P >> messageMSB - numberBitsMessage;
    Serial.print("P:");
    Serial.println(Prec,BIN);
    CRC = CRC ^ Prec;
    Serial.println(CRC,BIN);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //numberBitsMessage = 8;// HACER: FUNCIÓN QUE CALCULE EL NÚMERO DE BITS HASTA EL MSB
     for( i=15; i >= 0;i--){ //int tiene 16 bits

      if(bitRead(CRC,i) == 1)
        {
          Serial.println("Se detectó bit 1");
          Serial.print("El bit ");
          //messageMSB = i+1;
          numberBitsMessage = i+1;
          //Serial.print(i+1);
          //Serial.println(" es el MSB de message");
          //Serial.print("El número de bits del mensaje son: ");
          //Serial.print(numberBitsMessage);
          i=0;
  
        }    
    }
    Prec = P >> messageMSB - numberBitsMessage;
    Serial.print("P:");
    Serial.println(Prec,BIN);
    CRC = CRC ^ Prec;
    Serial.println(CRC,BIN);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //numberBitsMessage = 8;// HACER: FUNCIÓN QUE CALCULE EL NÚMERO DE BITS HASTA EL MSB
     for( i=15; i >= 0;i--){ //int tiene 16 bits

      if(bitRead(CRC,i) == 1)
        {
          Serial.println("Se detectó bit 1");
          Serial.print("El bit ");
          //messageMSB = i+1;
          numberBitsMessage = i+1;
          //Serial.print(i+1);
          //Serial.println(" es el MSB de message");
          //Serial.print("El número de bits del mensaje son: ");
          //Serial.print(numberBitsMessage);
          i=0;
        }    
    }
    Prec = P >> messageMSB - numberBitsMessage;
    Serial.print("P:");
    Serial.println(Prec,BIN);
    CRC = CRC ^ Prec;
    Serial.println(CRC,BIN);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    ///EL MENSAJE A TRANSMITIR T = M + CRC; T = M + FCS;
    int T = message2  ^ CRC;
    Serial.println("MENSAJE A TRANSMITIR: ");
    Serial.println(T,BIN);
    
    //lo pasamos a String:
    String Tstring = String(T);
    Serial.println("MENSAJE A TRANSMITIR EN STRING: ");
    Serial.println(Tstring);

    
    
    Serial.println("");

  
  delay(1000);
}
