var st = require("./main");

//----------------test delayConvert-----------------
test("test the conversion HH:MM to minutes", function(){
      expect(
        st.delayConvertTest("00:20")
        ).toEqual(20);
  });

  test("test the conversion HH:MM to minutes", function(){
    expect(
      st.delayConvertTest("02:20")
      ).toEqual(140);
});

test("test the conversion HH:MM to minutes", function(){
  expect(
    st.delayConvertTest("23:10")
    ).toEqual(1390);
});
//------------------------minuteToTimeTEST-------------- 

test("test the conversion  minutes to HH:MM", function(){
  expect(
    st.minuteToTimeTest(1440)
    ).toEqual("00:00");
});

test("test the conversion  minutes to HH:MM", function(){
expect(
  st.minuteToTimeTest(190)
  ).toEqual("03:10");
});

test("test the conversion  minutes to HH:MM", function(){
expect(
st.minuteToTimeTest(2000)
).toEqual("09:20");
});

//-----------testing the arrival time function-------- 
test("test the conversion HH:MM to minutes", function(){
  expect(
    st.delayConvertTest("00:20")
    ).toEqual(20);
});

test("test the conversion HH:MM to minutes", function()
{
  expect(st.delayConvertTest("02:20")).toEqual(140);
});

test("test the conversion HH:MM to minutes", function()
  {
    expect(
      st.delayConvertTest("23:10")
      ).toEqual(1390);
  });


//------------------- arrivalTime test ----------------
test("testing the shortest arival time ", function()
{
  expect(
    st.arrivalTimeTest('file.txt')
    ).toEqual("18:40");
});

test("testing the shortest arival time", function()
{
expect(
  st.arrivalTimeTest('file2.txt')
  ).toEqual("17:40");
});

