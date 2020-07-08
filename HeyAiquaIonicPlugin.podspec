
  Pod::Spec.new do |s|
    s.name = 'Heyaiquaionicplugin'
    s.version = '0.0.40'
    s.summary = 'Aiqua Ionic Plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/chunta/HeyAiquaIonicPlugin.git'
    s.author = 'appier'
    s.source = { :git => 'https://github.com/chunta/HeyAiquaIonicPlugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
    s.dependency 'AIRexLib'
    s.static_framework = true
  end
