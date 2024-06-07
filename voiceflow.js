(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.async = true;
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '663e189a464b296574167a3a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        container: 'voiceflow-chat' // Specify the container for the chat
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
    s.parentNode.insertBefore(v, s);
})(document, 'script');
