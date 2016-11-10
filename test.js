var frexp = require( 'math-float64-frexp' );


function fract(f) {
  return Math.abs(f % 1);
}


var encode = function (number) {

    var arr = new Uint8Array(Buffer.alloc(16, 0));

    arr[0] = 0x01;  //byte with real code asn1
    arr[1] = 0xFF;  //length
    arr[2] = 0x12;
    arr[3] = 0x80;





    console.log('arr:', arr);
    console.log('arr', arr.toString('hex'));

    var out = frexp(number);
    console.log('out', out);
 
    var mantissa = out[0];
    var exponenta = out[1];

    console.log('mantissa', mantissa, 'exponenta', exponenta);

    var q = mantissa * (1<<8);

    console.log('mantissa', q);

    var fractional = fract(mantissa * (1<<8));

    console.log('fractional', fractional);

    return 1;
}


encode(5.267899)