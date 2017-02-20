describe('Rate', function() {

  it('Neighborhood should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(Neighborhood)).to.be.false;
  });

});