import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { navigation } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TESLA</Text>
      </View>
      <View style={styles.detailStart}>
        <Text
          style={styles.detailExplaination}
        >
          Tesla will be the greatest compony in this beautiful world
        </Text>
        <TouchableOpacity
          onPress={() => { navigation.navigate('detail'); }}
        >
          <Text style={styles.detailReason}>and Here is the reason why Tesla will</Text>
        </TouchableOpacity>
        <Text style={styles.selfIntroduction}>by WWH(World wide handsome):Yuki Fujikawa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 86,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  detailStart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
    backgroundColor: 'yellow',
  },
  detailExplaination: {
    fontSize: 15,
    color: 'red',
  },
  detailReason: {
    fontSize: 15,
    color: 'red',
  },
  selfIntroduction: {
    fontSize: 15,
    color: 'red',
  },
});

// もはやヘッダーはいらない説ある（テキストはあり）
// Homeのところを無くさなくてはならないあんなものいらない
// 文字の色を横に流れるにつれてグラデーションする方法とか調べような
// あとはheaderTitleのTESLAのところは最終的にはテスラのロゴまたはテスラ式TESLA表記の文字のICONを添付する！
// detailのどこかで動画を貼り付けたい
// 株価上昇の説明の欄ではそこにアクセスした瞬間に株価が鰻登りするアクションを追加したい
// 画像の上にテキストを入れるやつはindexとかでどちらが上かとか表現するんだっけ？
// 今黄色になっているHomeのbackgroundは俺の「俺の〇〇」顔の写真を添付したい

// 加奈ちゃんと余生を楽しむために一日英語DAYとか1時間韓国語DAYとかしてみたい（他言語話したら即罰金の刑）まるでYoutuberで草ですwwww
