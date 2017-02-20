describe('Landing', function() {

  it('Landing should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(Landing)).to.be.false;
  });

});