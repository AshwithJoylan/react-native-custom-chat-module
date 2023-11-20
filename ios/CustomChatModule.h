
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCustomChatModuleSpec.h"

@interface CustomChatModule : NSObject <NativeCustomChatModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface CustomChatModule : NSObject <RCTBridgeModule>
#endif

@end
