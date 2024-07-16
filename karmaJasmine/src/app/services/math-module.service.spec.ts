import { TestBed } from '@angular/core/testing';
import { MathModuleService } from './math-module.service';

describe('MathModuleService', () => {
  let service: MathModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two number',()=>{
    const result = service.add(2, 3);
    expect(result).toBe(5);
  })

  it('should return negative number when we pass the positve and negative number', ()=>{
    const result = service.add(2, -3);
    expect(result).toBe(-1)
  })

  it('should throw an error for non-numeric inputs',()=>{
    expect(()=>service.addCheck(2, 'a')).toThrowError('both arguments must be a number');
    expect(()=>service.addCheck('a', 4)).toThrowError('Both arguments must be a number');
    expect(()=>service.addCheck(null, 2)).toThrowError("Null arguments must be a number");
  })

  // it('should throw an error for missing inputs',()=>{
  //   expect(()=>service.addCheck(2)).toThrowError("Missing Inputs");
  //   expect(()=>service.addCheck()).toThrowError("Missing Arguments")
  // })  

});
