# node-java-monoservices
Monoservices are small self contained programs to run outside of node using commandline to include other languages.

Usage:

To import add ```require('./java.js');``` to the top of your node script and await imports

All of the .java files in monoservices/java will be compiled and registered under the global object Java. In the example Java.multiply calls the multiply.class and returns the multiplication of 2 numbers passed to it.