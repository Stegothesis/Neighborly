describe('City', function() {

  it('City should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(City)).to.be.false;
  });

});