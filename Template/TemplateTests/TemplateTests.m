//
//  TemplateTests.m
//  TemplateTests
//
//  Created by James Ide on 4/28/15.
//
//

#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

@interface TemplateTests : XCTestCase

@end

@implementation TemplateTests

- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testTemplate {
    // This is an example of a functional test case.
    XCTAssert(YES, @"Pass");
}

- (void)testPerformanceTemplate {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

@end
