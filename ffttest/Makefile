test: src/fix_fft.o test.o
		g++ test.o src/fix_fft.o -o test

fix_fft.o:
		g++ -c -o src/fix_fft.o src/fix_fft.cpp

test.o: test.cpp
		g++ -c -o test.o test.cpp

