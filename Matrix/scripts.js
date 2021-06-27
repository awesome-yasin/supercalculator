
function read (m1, m2) {

	a11 = parseFloat(m1.a11.value, 10)
	a12 =	parseFloat(m1.a12.value, 10)
	a13 = parseFloat(m1.a13.value, 10)

	a21 = parseFloat(m1.a21.value, 10)
	a22 = parseFloat(m1.a22.value, 10)
	a23 = parseFloat(m1.a23.value, 10)

	a31 = parseFloat(m1.a31.value, 10)
	a32 = parseFloat(m1.a32.value, 10)
	a33 = parseFloat(m1.a33.value, 10)


	b11 = parseFloat(m2.a11.value, 10)
	b12 =	parseFloat(m2.a12.value, 10)
	b13 = parseFloat(m2.a13.value, 10)

	b21 = parseFloat(m2.a21.value, 10)
	b22 = parseFloat(m2.a22.value, 10)
	b23 = parseFloat(m2.a23.value, 10)

	b31 = parseFloat(m2.a31.value, 10)
	b32 = parseFloat(m2.a32.value, 10)
	b33 = parseFloat(m2.a33.value, 10)

   }

function swap(m1,m2) {

   m2.a11.value = m1.a11.value
   m2.a12.value = m1.a12.value
   m2.a13.value = m1.a13.value

   m2.a21.value = m1.a21.value
   m2.a22.value = m1.a22.value
   m2.a23.value = m1.a23.value

   m2.a31.value = m1.a31.value
   m2.a32.value = m1.a32.value
   m2.a33.value = m1.a33.value

}

function add(am1, am2, m3) {

   read(am1, am2)

   m3.a11.value = a11 + b11
   m3.a12.value = a12 + b12
   m3.a13.value = a13 + b13
   m3.a21.value = a21 + b21
   m3.a22.value = a22 + b22
   m3.a23.value = a23 + b23
   m3.a31.value = a31 + b31
   m3.a32.value = a32 + b32
   m3.a33.value = a33 + b33
}

function mult(am1, am2, m3) {

   read(am1, am2)

   m3.a11.value = a11*b11+a12*b21+a13*b31
   m3.a12.value = a11*b12+a12*b22+a13*b32
   m3.a13.value = a11*b13+a12*b23+a13*b33
   m3.a21.value = a21*b11+a22*b21+a23*b31
   m3.a22.value = a21*b12+a22*b22+a23*b32
   m3.a23.value = a21*b13+a22*b23+a23*b33
   m3.a31.value = a31*b11+a32*b21+a33*b31
   m3.a32.value = a31*b12+a32*b22+a33*b32
   m3.a33.value = a31*b13+a32*b23+a33*b33

   }

function det(am1, op) {
   read(am1, am1)

   detval = (a11*a22*a33 + a21*a32*a13 + a12*a23*a31) - (a31*a22*a13+a21*a12*a33+a32*a23*a11)

   op.output.value = detval

}

function adj(am1, m3) {

   read(am1, am1)

   b11 =      (a22*a33 - a23*a32)
   b12 = -1 * (a21*a33 - a23*a31)
   b13 =      (a21*a32 - a22*a31)
   b21 = -1 * (a12*a33 - a13*a32)
   b22 =      (a11*a33 - a13*a31)				/*  cofactors */
   b23 = -1 * (a11*a32 -a12*a31)
   b31 =      (a12*a23 - a13*a22)
   b32 = -1 * (a11*a23 - a21*a13)
   b33 =      (a11*a22 - a12*a21)

/* transpose of the cofactors gives adjoint */


   m3.a11.value = b11
   m3.a12.value = b21
   m3.a13.value = b31

   m3.a21.value = b12
   m3.a22.value = b22
   m3.a23.value = b32

   m3.a31.value = b13
   m3.a32.value = b23
   m3.a33.value = b33

}

function inv(am1, aop, am3) {

	   read(am1, am1)

	   det(am1, aop)

	   detval = parseFloat(aop.output.value)

if (detval==0) { alert("You have entered a Singular Matrix.\r Singular Matrices do not have inverses.  \r\rThis can be verified by calculating the determinant equal to 0.") }

   else {

   adj(am1, am3)

   b11 = parseFloat(am3.a11.value, 10)
   b12 = parseFloat(am3.a12.value, 10)
   b13 = parseFloat(am3.a13.value, 10)
   b21 = parseFloat(am3.a21.value, 10)
   b22 = parseFloat(am3.a22.value, 10)
   b23 = parseFloat(am3.a23.value, 10)
   b31 = parseFloat(am3.a31.value, 10)
   b32 = parseFloat(am3.a32.value, 10)
   b33 = parseFloat(am3.a33.value, 10)

   am3.a11.value = b11 / detval
   am3.a12.value = b12 / detval
   am3.a13.value = b13 / detval

   am3.a21.value = b21 / detval
   am3.a22.value = b22 / detval
   am3.a23.value = b23 / detval

   am3.a31.value = b31 / detval
   am3.a32.value = b32 / detval
   am3.a33.value = b33 / detval

			   } // ends else
}