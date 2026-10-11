import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://familia-cerca-v9.vercel.app/?codigo=FAMILIA-5006' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      allowsBackForwardNavigationGestures={true}
    />
  );
}
