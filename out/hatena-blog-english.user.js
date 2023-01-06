// ==UserScript==
// @name        Inject updated Hatena Blog English locale strings
// @namespace   https://github.com/sudofox
// @match       https://blog.hatena.ne.jp/*
// @grant       none
// @version     1.02
// @author      sudofox
// @description 1/6/2023, 1:59:50 PM
// @run-at document-start
// ==/UserScript==

window.addEventListener("beforescriptexecute", function (event) {
  var originalScript = event.target;
  if (/\/texts-en\.js/.test(originalScript.src)) {
    originalScript.remove();
    injectLocales();
    event.preventDefault();
  }
});

function injectLocales() {
  window.__hatena_locale_texts__ = {};
  window.__hatena_locale_texts__["en"] = newLocales;
}
newLocales = {
  "a.hatena.ne.jp": {
    "value": "Hatena Antenna"
  },
  "admin.accesslog": {
    "value": "Access log"
  },
  "admin.blog.config.comment.add_refused_ips.note": {
    "value": "If you want to reject a guest's comment, please enter their IP address. You can find the IP address in the comment management screen."
  },
  "admin.blog.config.comment.add_refused_ips.note.comment_permission": {
    "value": "To reject all guest comments, please change the comment permissions to 'users' in the comment settings."
  },
  "admin.blog.config.comment.refused_ip.added": {
    "value": "Comments are now blocked from this ip address."
  },
  "admin.blog.config.comment.refused_ip.not_found": {
    "value": "Comments are now blocked from this ip."
  },
  "admin.blog.config.comment.refused_ip.removed": {
    "value": "Comments are now allowed from this ip address."
  },
  "admin.blog.config.confirm.delete_pro_notice_with_url": {
    "args": [
      1
    ],
    "text_args": [],
    "value": "If you are using Hatena Blog Pro, deleting all your blogs will not cancel your subscription. If you wish to cancel your subscription, please do so from the cancellation page."
  },
  "admin.blog.config.confirm.delete_pro_notice_with_url %1": {
    "args": [
      1
    ],
    "text_args": [],
    "value": "If you are using Hatena Blog Pro, deleting all your blogs will not cancel your subscription. If you wish to cancel your subscription, please do so from the cancellation page."
  },
  "admin.blog.config.confirm.delete_pro_notice_with_url [_1]": {
    "args": [
      1
    ],
    "text_args": [],
    "value": "If you are using Hatena Blog Pro, deleting all your blogs will not cancel your subscription. If you wish to cancel your subscription, please do so from the cancellation page."
  },
  "admin.blog.config.description": {
    "value": "Description"
  },
  "admin.blog.config.entry_ogimage.description": {
    "value": "You can set default og:image of entries."
  },
  "admin.blog.config.entry_ogimage.description2": {
    "value": "You can set an eye-catching image (also known as a thumbnail or featured image) that can be used for featured entries or social media sharing. On article pages, the eye-catching image specified for each article will be prioritized and displayed."
  },
  "admin.blog.config.id": {
    "value": "Blog URL"
  },
  "admin.blog.config.image_upload_failure": {
    "value": "Your upload failed. Please try uploading again."
  },
  "admin.blog.config.name": {
    "value": "Title"
  },
  "admin.blog.config.refused_ips": {
    "value": "Refused IP addresses"
  },
  "admin.blog.config.refused_ips.empty": {
    "value": "Empty"
  },
  "admin.blog.config.refused_users": {
    "value": "Comment refused users"
  },
  "admin.blog.config.refused_users.empty": {
    "value": "Empty"
  },
  "admin.blog.edit.schedule_post_facebook_discontinued": {
    "value": "Important notice: As of July 29, 2018 (Sunday), we will no longer provide the ability to schedule posts to Facebook."
  },
  "admin.blog.edit.schedule_post_facebook_discontinued.show_detail": {
    "value": "Show details"
  },
  "admin.blog.edit.schedule_post_twitter_api_policy": {
    "value": "Important notice: Starting October 4, 2018 (Thursday), it will be necessary to re-link your Twitter account when posting to Twitter at the same time as publishing."
  },
  "admin.blog.edit.schedule_post_twitter_expired": {
    "value": "Important notice: Starting October 4, 2018 (Thursday), it has become necessary to re-link your Twitter account."
  },
  "admin.blog.members.owner": {
    "value": "Owner"
  },
  "admin.blog.plus.notice": {
    "value": "For those using Hatena Blog Pro"
  },
  "admin.blog.welcome_message": {
    "value": "Welcome to Hatena Blog!"
  },
  "admin.blog_subscribers_count": {
    "value": "Subscribers"
  },
  "admin.breadcrumbs.breadcrumbs_add": {
    "value": "Add a breadcrumb list"
  },
  "admin.breadcrumbs.breadcrumbs_category_discription": {
    "value": "If you register categories without input, all article pages without breadcrumb registration in specific categories will be displayed as targets. If you want to match the display of breadcrumbs with existing categories, please register the existing category name with 'exact match.'"
  },
  "admin.breadcrumbs.breadcrumbs_edit": {
    "value": "Edit breadcrumbs"
  },
  "admin.breadcrumbs.breadcrumbs_item": {
    "value": "Breadcrumb item"
  },
  "admin.breadcrumbs.breadcrumbs_preview": {
    "value": "Breadcrumb preview"
  },
  "admin.breadcrumbs.breadcrumbs_rule": {
    "value": "Breadcrumb rules"
  },
  "admin.breadcrumbs.breadcrumbs_rule_delete_confirm": {
    "value": "Are you sure you want to delete this rule?"
  },
  "admin.breadcrumbs.breadcrumbs_rule_page_type_tip": {
    "value": "The 'breadcrumb scope' and 'breadcrumb category' cannot be changed after they are saved. If you want to change these settings, you must delete the existing ones and create new ones."
  },
  "admin.breadcrumbs.breadcrumbs_rule_tip": {
    "value": "For each breadcrumb rule you enter, a new input field will appear."
  },
  "admin.breadcrumbs.categories": {
    "value": "Breadcrumb category"
  },
  "admin.breadcrumbs.delete": {
    "value": "Delete"
  },
  "admin.breadcrumbs.edit": {
    "value": "Edit"
  },
  "admin.breadcrumbs.labels": {
    "value": "Labels"
  },
  "admin.breadcrumbs.page_type": {
    "value": "Breadcrumb scope"
  },
  "admin.breadcrumbs.page_type.all": {
    "value": "All others"
  },
  "admin.breadcrumbs.page_type.archive": {
    "value": "Article list"
  },
  "admin.breadcrumbs.page_type.category": {
    "value": "Article list by category"
  },
  "admin.breadcrumbs.page_type.entry": {
    "value": "Article"
  },
  "admin.breadcrumbs.page_type.index": {
    "value": "Homepage"
  },
  "admin.breadcrumbs.page_type.top_page": {
    "value": "Homepage"
  },
  "admin.categories": {
    "value": "Categories"
  },
  "admin.comments.delete.confirm": {
    "value": "Delete checked comments. Are you sure?"
  },
  "admin.config_delete.confirm_agreement": {
    "value": "I have confirmed that the blog to be deleted is correct. I also understand that once a blog is deleted, it cannot be recovered."
  },
  "admin.config_delete.confirm_blog": {
    "value": "Confirm deletion of blog"
  },
  "admin.config_delete.confirm_blog_url": {
    "value": "Please enter the same content as the 'Blog URL'."
  },
  "admin.config_delete.confirm_notice": {
    "value": "To avoid accidental deletion, please click on the 'blog URL' shown above to confirm that it is the blog you want to delete. Once you've verified that this is correct, click the checkbox below."
  },
  "admin.config_delete.confirm_required": {
    "value": "*required"
  },
  "admin.config_delete.why": {
    "value": "Why you are deleting this? (answer optional)"
  },
  "admin.config_delete.why.textarea": {
    "value": "Reason for deletion"
  },
  "admin.design.module_setting_badvalue": {
    "value": "Please enter a valid value."
  },
  "admin.design.preview_entry_page": {
    "value": "Preview Entry Page"
  },
  "admin.design.quit_preview_entry_page": {
    "value": "Quit preview entry page"
  },
  "admin.design.stop_header_image_confirm": {
    "value": "This image will be removed. Are you sure?"
  },
  "admin.downgraded_role": {
    "args": [
      1,
      2
    ],
    "value": "Permissions changed from %s to %s"
  },
  "admin.downgraded_role %1%2": {
    "args": [
      1,
      2
    ],
    "value": "Permissions changed from %s to %s"
  },
  "admin.downgraded_role [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "Permissions changed from %s to %s"
  },
  "admin.edit.tag.add_tag": {
    "value": "Add a tag"
  },
  "admin.edit.tag.desc": {
    "value": "By adding tags to your articles, they are more likely to be read by people with similar interests."
  },
  "admin.edit.tag.edit_done": {
    "value": "Done!"
  },
  "admin.edit.tag.edit_tag.description": {
    "value": "By adding tags to your articles, they are more likely to be read by people with similar interests. Please enter a tag and press Enter to confirm."
  },
  "admin.edit.tag.edit_tag.heading": {
    "value": "Add or edit tags"
  },
  "admin.edit.tag.hints": {
    "value": "Tips for adding tags"
  },
  "admin.edit.tag.hints.guideline": {
    "value": "Make sure to follow the rules"
  },
  "admin.edit.tag.hints.guideline.with_link": {
    "value": "ガイドラインを読んで、"
  },
  "admin.edit.tag.hints.number_of_tags": {
    "value": "We recommend adding between 3 and 5 tags."
  },
  "admin.edit.tag.hints.tag_content": {
    "value": "記事内容に沿った、理解しやすいタグを選ぼう"
  },
  "admin.edit.tag.input.placeholder": {
    "value": "タグを入力..."
  },
  "admin.edit_delete": {
    "value": "Change profile"
  },
  "admin.entries": {
    "value": "Manage Entries"
  },
  "admin.entries.categories.selector": {
    "value": "カテゴリー指定なし"
  },
  "admin.entries.top_placed_publication.activated": {
    "value": "記事をトップページの先頭に表示しました。"
  },
  "admin.entries.top_placed_publication.activated_overwritten": {
    "value": "トップページの先頭に表示する記事を変更しました。"
  },
  "admin.entries.top_placed_publication.comm_failed": {
    "value": "先頭表示設定中に通信に失敗しました、再度設定をしてください"
  },
  "admin.entries.top_placed_publication.confirm": {
    "value": "選択した記事をトップページの先頭に表示します。よろしいですか？"
  },
  "admin.entries.top_placed_publication.confirm_activation": {
    "value": "選択した記事をトップページの先頭に表示します。よろしいですか？"
  },
  "admin.entries.top_placed_publication.confirm_deactivation": {
    "value": "トップページの先頭に表示している記事を解除します。よろしいですか？"
  },
  "admin.entries.top_placed_publication.deactivated": {
    "value": "トップページの先頭に表示している記事を解除しました。"
  },
  "admin.entries.top_placed_publication.not_found": {
    "value": "先頭表示する記事がありませんでした、URLを確認してください"
  },
  "admin.entry.edit_scheduled_update": {
    "value": "差し替え予約を編集"
  },
  "admin.image-upload-notice": {
    "value": "Images will be uploaded to Hatena Fotolife"
  },
  "admin.import.undo.confirm": {
    "value": "This import will be undone. Are you sure?"
  },
  "admin.leave_plus": {
    "value": "Cancel Hatena Blog Pro subscription"
  },
  "admin.manage_blog": {
    "value": "Manage blog"
  },
  "admin.my_blogs": {
    "quanttype": "1_o",
    "value": "My Blogs",
    "value_1": "My Blog"
  },
  "admin.myblog.no_blog": {
    "value": "まだブログがありません。さっそく作成してみましょう！"
  },
  "admin.myblog.subcontent.detail": {
    "value": "Detail"
  },
  "admin.myblogs.draghandle.hide": {
    "value": "Hide blog dragging handle"
  },
  "admin.myblogs.draghandle.show": {
    "value": "Show blog dragging handle"
  },
  "admin.myblogs.sort": {
    "value": "並べ替え"
  },
  "admin.myblogs.sort.done": {
    "value": "並べ替えを完了"
  },
  "admin.odai.delete_odai.confirm": {
    "args": [
      1,
      2
    ],
    "value": "Are you sure to delete odai \"%s\" (%s) ?"
  },
  "admin.odai.delete_odai.confirm %1%2": {
    "args": [
      1,
      2
    ],
    "value": "Are you sure to delete odai \"%s\" (%s) ?"
  },
  "admin.odai.delete_odai.confirm [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "Are you sure to delete odai \"%s\" (%s) ?"
  },
  "admin.odai.fillin": {
    "args": [
      1
    ],
    "value": "Odai「%s」"
  },
  "admin.odai.fillin %1": {
    "args": [
      1
    ],
    "value": "Odai「%s」"
  },
  "admin.odai.fillin [_1]": {
    "args": [
      1
    ],
    "value": "Odai「%s」"
  },
  "admin.odai.insert": {
    "value": "Insert this odai"
  },
  "admin.odai.leave_slot": {
    "value": "Back to promotions page"
  },
  "admin.odai.odai_slot": {
    "value": "Odai Slot"
  },
  "admin.odai.open_slot": {
    "value": "Open Odai Slot"
  },
  "admin.odai.slot_description": {
    "value": "[\"↻ボタンを押すと、ランダムにお題のキーワードを表示します。\",\n\"書きたい話題を見つけたら「このお題で書く」ボタンをクリック。\"]"
  },
  "admin.odai.slot_description_1": {
    "value": "<i class=\"blogicon-repeat\"></i>をクリックするたびに、お題のキーワードが変わります。"
  },
  "admin.odai.slot_description_2": {
    "value": "書きたい話題が見つかったら「お題の記事を書く」をクリック。"
  },
  "admin.odai.slot_description_foot": {
    "value": "※記事中のお題キーワードをクリックすると、他の投稿を一覧できます。\n"
  },
  "admin.odai.slot_description_head": {
    "value": "スロットを回してブログを書こう！<br>\n新しい話題を探してみませんか？"
  },
  "admin.odai.turn": {
    "value": "Turn the slot"
  },
  "admin.paint": {
    "value": "Draw picture"
  },
  "admin.paint.bucket": {
    "value": "Paint Bucket"
  },
  "admin.paint.canvas-large": {
    "value": "Large canvas"
  },
  "admin.paint.canvas-middle": {
    "value": "Medium canvas"
  },
  "admin.paint.canvas-small": {
    "value": "Small canvas"
  },
  "admin.paint.clear": {
    "value": "Clear"
  },
  "admin.paint.dropper": {
    "value": "Eyedropper"
  },
  "admin.paint.eraser": {
    "value": "Eraser"
  },
  "admin.paint.pencil": {
    "value": "Pen"
  },
  "admin.paint.redo": {
    "value": "Redo"
  },
  "admin.paint.resize_canvas.confirm": {
    "value": "Your drawing may be cropped if you make the canvas smaller. Are you sure you want to do this? (This cannot be undone) "
  },
  "admin.paint.stroke_width": {
    "value": "Stroke Width"
  },
  "admin.paint.undo": {
    "value": "Undo"
  },
  "admin.paint.water": {
    "value": "Water"
  },
  "admin.paint_dev": {
    "value": "絵を描く（スタッフ限定公開）"
  },
  "admin.permission.public": {
    "value": "Public"
  },
  "admin.plus.disabled.js_string": {
    "value": "はてなブログProに登録するとご利用いただけます。"
  },
  "admin.plus.disabled.more_revisions": {
    "value": ""
  },
  "admin.plus.plus_detail.js_string": {
    "value": "詳しくはこちら"
  },
  "admin.post_count": {
    "value": "Entries posted"
  },
  "admin.profile_card.search": {
    "value": "プロフィールカードを検索"
  },
  "admin.profile_card.search.button": {
    "value": "検索"
  },
  "admin.profile_cards.author": {
    "value": "著者名: "
  },
  "admin.profile_edit": {
    "value": "Edit"
  },
  "admin.revision_diff_detail": {
    "args": [
      1
    ],
    "value": "「%s」の編集内容"
  },
  "admin.revision_diff_detail %1": {
    "args": [
      1
    ],
    "value": "「%s」の編集内容"
  },
  "admin.revision_diff_detail [_1]": {
    "args": [
      1
    ],
    "value": "「%s」の編集内容"
  },
  "admin.revisions.back_to_entries": {
    "value": "記事の管理に戻る"
  },
  "admin.revisions.back_to_pages": {
    "value": "ページの管理に戻る"
  },
  "admin.revisions.diff.changes_stat": {
    "args": [
      1,
      2
    ],
    "value": "%s lines added, %s lines deleted"
  },
  "admin.revisions.diff.changes_stat %1%2": {
    "args": [
      1,
      2
    ],
    "value": "%s lines added, %s lines deleted"
  },
  "admin.revisions.diff.changes_stat [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "%s lines added, %s lines deleted"
  },
  "admin.revisions.edit_from_this": {
    "value": "この履歴から編集"
  },
  "admin.revisions.latest_revision": {
    "value": "Current version"
  },
  "admin.revisions.no_changes_in_body": {
    "value": "本文の変更はありません"
  },
  "admin.revisions.no_revisions_for": {
    "args": [
      1
    ],
    "value": "No revisions found for \"%s\"."
  },
  "admin.revisions.no_revisions_for %1": {
    "args": [
      1
    ],
    "value": "No revisions found for \"%s\"."
  },
  "admin.revisions.no_revisions_for [_1]": {
    "args": [
      1
    ],
    "value": "No revisions found for \"%s\"."
  },
  "admin.revisions.revisions": {
    "value": "Revisions"
  },
  "admin.revisions.time": {
    "value": "保存時刻"
  },
  "admin.revisions_for": {
    "args": [
      1
    ],
    "value": "Revisions of \"%s\""
  },
  "admin.revisions_for %1": {
    "args": [
      1
    ],
    "value": "Revisions of \"%s\""
  },
  "admin.revisions_for [_1]": {
    "args": [
      1
    ],
    "value": "Revisions of \"%s\""
  },
  "admin.subscribe.private.blog.message": {
    "value": "公開範囲がカスタマイズされています。記事の詳細は、公開範囲が｢すべての人に表示｣の場合に表示されます。"
  },
  "admin.subscribe.private.message": {
    "value": "This blog is only available to authorized readers."
  },
  "admin.subscribe.private.message.1": {
    "value": "公開範囲がカスタムされています。"
  },
  "admin.subscribe.private.message.2": {
    "value": "記事の詳細は、公開範囲が｢すべての人に表示｣の場合に表示されます。"
  },
  "admin.subscribing_blog": {
    "value": "Subscriptions"
  },
  "admin.subscription_list": {
    "value": "Subscription list"
  },
  "admin.success_withdrawal_from_blog": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめました"
  },
  "admin.success_withdrawal_from_blog %1%2": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめました"
  },
  "admin.success_withdrawal_from_blog [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめました"
  },
  "admin.upload_header_image": {
    "value": "Upload image"
  },
  "admin.upload_image": {
    "value": "Upload Photo"
  },
  "admin.user.blog.members.withdraw_from_this_blog": {
    "args": [
      1
    ],
    "value": "このブログの%sをやめる"
  },
  "admin.user.blog.members.withdraw_from_this_blog %1": {
    "args": [
      1
    ],
    "value": "このブログの%sをやめる"
  },
  "admin.user.blog.members.withdraw_from_this_blog [_1]": {
    "args": [
      1
    ],
    "value": "このブログの%sをやめる"
  },
  "admin.user.blog.members.withdraw_from_this_blog.confirm": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめます。やめてよいですか？"
  },
  "admin.user.blog.members.withdraw_from_this_blog.confirm %1%2": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめます。やめてよいですか？"
  },
  "admin.user.blog.members.withdraw_from_this_blog.confirm [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "ブログ「%s」の%sをやめます。やめてよいですか？"
  },
  "admin.user.blog.revisions.action.preview_draft": {
    "value": "下書きプレビュー"
  },
  "admin.user.blog.revisions.action.publish": {
    "value": "投稿"
  },
  "admin.user.blog.revisions.action.publish_scheduled_entry": {
    "value": "予約投稿を公開"
  },
  "admin.user.blog.revisions.action.save_draft": {
    "value": "下書き保存"
  },
  "admin.user.blog.revisions.action.schedule_entry": {
    "value": "予約投稿"
  },
  "admin.user.blog.revisions.action.unpublish": {
    "value": "下書きに戻す"
  },
  "admin.view_blog": {
    "value": "View blog"
  },
  "album.hatena": {
    "value": "Hatena Album"
  },
  "b.hatena.ne.jp": {
    "value": "Hatena Bookmark"
  },
  "backup.clear_restore": {
    "value": "Clear"
  },
  "backup.notice": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists."
  },
  "backup.notice %1": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists."
  },
  "backup.notice [_1]": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists."
  },
  "backup.notice.ask_restore": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists. Restore it?"
  },
  "backup.notice.ask_restore %1": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists. Restore it?"
  },
  "backup.notice.ask_restore [_1]": {
    "args": [
      1
    ],
    "value": "Backup (%s) exists. Restore it?"
  },
  "backup.notice.auto_restored": {
    "args": [
      1
    ],
    "value": "Backup(%s) is inserted"
  },
  "backup.notice.auto_restored %1": {
    "args": [
      1
    ],
    "value": "Backup(%s) is inserted"
  },
  "backup.notice.auto_restored [_1]": {
    "args": [
      1
    ],
    "value": "Backup(%s) is inserted"
  },
  "backup.restore": {
    "value": "Restore"
  },
  "blog.admin.edit-sidebar-module": {
    "value": "Edit module\n"
  },
  "blog.bun_ken.description": {
    "value": "校閲や推敲を支援するツール『文賢』を利用し、文章の改善点をリアルタイムで表示します。"
  },
  "blog.bun_ken.description.beta_version": {
    "value": "はてなブログProをご利用の方は、ベータ版としてx年x月x日までの期間無料でお試しいただけます。"
  },
  "blog.bun_ken.description.help": {
    "value": "文賢の基本的な使い方"
  },
  "blog.bun_ken.description_secondary": {
    "value": "用語の誤った使い方や、避けたほうがよい表現など、見落としがちなポイントを第三者的な視点でチェックします。"
  },
  "blog.bun_ken.send_empty_body": {
    "value": "本文が書かれていないため、文賢に送れませんでした。本文を入力して再度お試しください。"
  },
  "blog.category": {
    "value": "Category"
  },
  "blog.category.unavailable": {
    "value": "ページ編集では利用できません。"
  },
  "blog.confirm.delete": {
    "value": "Are you sure that you want to delete this?"
  },
  "blog.custom_url": {
    "value": "Custom URL"
  },
  "blog.custom_url.error.duplicate": {
    "value": "他の記事と重複しています。別の文字列を指定してください。"
  },
  "blog.datetime": {
    "value": "Date/time posted"
  },
  "blog.edit_done.confirm.tweet": {
    "value": "The following content will be tweeted, OK?"
  },
  "blog.editform.label.socialize_on_post": {
    "value": "Share"
  },
  "blog.entry-header": {
    "value": "記事上（日付上）"
  },
  "blog.errors.body.long": {
    "value": "Body too long"
  },
  "blog.go_to.blog": {
    "value": "Go to blog"
  },
  "blog.go_to.revisions": {
    "value": "Go to revisions"
  },
  "blog.hatena.ne.jp": {
    "value": "Hatena Blog"
  },
  "blog.module.antenna": {
    "value": "Antenna"
  },
  "blog.module.archive": {
    "value": "Archive"
  },
  "blog.module.categories.to_be_hidden": {
    "value": "表示されないカテゴリー"
  },
  "blog.module.categories.to_be_shown": {
    "value": "表示されるカテゴリー"
  },
  "blog.module.category": {
    "value": "Category"
  },
  "blog.module.circles": {
    "value": "Groups joined"
  },
  "blog.module.html": {
    "value": "HTML"
  },
  "blog.module.link": {
    "value": "Links"
  },
  "blog.module.links.start": {
    "value": "ブログをはじめる"
  },
  "blog.module.profile": {
    "value": "Profile"
  },
  "blog.module.recent_comments": {
    "value": "Recent comments"
  },
  "blog.module.recent_entries": {
    "value": "Recent Entries"
  },
  "blog.module.search": {
    "value": "Search"
  },
  "blog.og_image": {
    "value": "post thumbnail"
  },
  "blog.permission.private": {
    "value": "Private"
  },
  "blog.posted": {
    "value": "Posted to Hatena Blog"
  },
  "blog.proxy_test.execute": {
    "value": "検証を実行する"
  },
  "blog.proxy_test.executing": {
    "value": "検証を実行しています"
  },
  "blog.proxy_test.result": {
    "value": "Result"
  },
  "blog.proxy_test.result.failure": {
    "value": "Failure"
  },
  "blog.proxy_test.result.notification.failure": {
    "args": [
      1,
      2
    ],
    "value": "検証が完了しました。全%s項目のうち、%s項目で問題が見つかりました。"
  },
  "blog.proxy_test.result.notification.failure %1%2": {
    "args": [
      1,
      2
    ],
    "value": "検証が完了しました。全%s項目のうち、%s項目で問題が見つかりました。"
  },
  "blog.proxy_test.result.notification.failure [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "検証が完了しました。全%s項目のうち、%s項目で問題が見つかりました。"
  },
  "blog.proxy_test.result.notification.success": {
    "value": "検証が完了しました。問題は見つかりませんでした。"
  },
  "blog.proxy_test.result.request": {
    "value": "Request"
  },
  "blog.proxy_test.result.response": {
    "value": "Response"
  },
  "blog.proxy_test.result.success": {
    "value": "Success"
  },
  "blog.send_bun_ken": {
    "value": "文賢に送る"
  },
  "blog.social.service.name.haiku": {
    "value": "はてなハイク"
  },
  "blog.social.service.name.mixi": {
    "value": "mixi"
  },
  "blog.social.service.name.twitter": {
    "value": "Twitter"
  },
  "blog.social.share.confirm": {
    "args": [
      1
    ],
    "value": "%sにシェアしますか？"
  },
  "blog.social.share.confirm %1": {
    "args": [
      1
    ],
    "value": "%sにシェアしますか？"
  },
  "blog.social.share.confirm [_1]": {
    "args": [
      1
    ],
    "value": "%sにシェアしますか？"
  },
  "blog.social.share.success": {
    "args": [
      1
    ],
    "value": "%sへのシェアが完了しました。"
  },
  "blog.social.share.success %1": {
    "args": [
      1
    ],
    "value": "%sへのシェアが完了しました。"
  },
  "blog.social.share.success [_1]": {
    "args": [
      1
    ],
    "value": "%sへのシェアが完了しました。"
  },
  "blog.social.twitter.default.message": {
    "value": "はてなブログに投稿しました #はてなブログ"
  },
  "blog.social_button.label.facebook": {
    "value": "Post to Facebook"
  },
  "blog.social_button.label.haiku": {
    "value": "Post to Hatena Haiku"
  },
  "blog.social_button.label.mixicheck": {
    "value": "Post to mixi"
  },
  "blog.social_button.label.twitter": {
    "value": "Post to Twitter"
  },
  "blog.title": {
    "value": "Title"
  },
  "blog.twitter.length.over.error": {
    "value": "入力できる最大文字数を超えています"
  },
  "blog_entry_number": {
    "value": "Blog Entry Count"
  },
  "blog_total_days": {
    "value": "Day Count"
  },
  "blog_total_days.20200528": {
    "value": "Blog Post Day Count"
  },
  "c.hatena.ne.jp": {
    "value": "Hatena Coco"
  },
  "cancel": {
    "value": "Cancel"
  },
  "category.new": {
    "value": "New Category"
  },
  "category.new.prompt": {
    "value": "Enter category name."
  },
  "category.none": {
    "value": "None"
  },
  "close": {
    "value": "Close"
  },
  "comment.delete.messages.confirm": {
    "value": "This comment will be deleted. Are you sure?"
  },
  "counter.hatena.ne.jp": {
    "value": "Hatena Counter"
  },
  "create_category": {
    "value": "Create a new category"
  },
  "create_new_blog": {
    "value": "Create a new blog"
  },
  "d.hatena.ne.jp": {
    "value": "Hatena Diary"
  },
  "datetime.ago": {
    "args": [
      1
    ],
    "value": "%s ago"
  },
  "datetime.ago %1": {
    "args": [
      1
    ],
    "value": "%s ago"
  },
  "datetime.ago [_1]": {
    "args": [
      1
    ],
    "value": "%s ago"
  },
  "datetime.later": {
    "args": [
      1
    ],
    "value": "%s later"
  },
  "datetime.later %1": {
    "args": [
      1
    ],
    "value": "%s later"
  },
  "datetime.later [_1]": {
    "args": [
      1
    ],
    "value": "%s later"
  },
  "datetime.update_preview": {
    "value": "Update preview"
  },
  "days_n": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "days_n %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "days_n [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "delete": {
    "value": "Delete"
  },
  "design": {
    "value": "Design"
  },
  "done": {
    "value": "Done"
  },
  "e.hatena.ne.jp": {
    "value": "Hatena Blog"
  },
  "edit": {
    "value": "Edit"
  },
  "edit_form.advanced.settings": {
    "value": "高度な設定"
  },
  "edit_form.advanced.settings.description": {
    "value": "記事の内容に関するメタデータをカスタマイズできます。記事がシェアされたときや、検索結果に表示されます。"
  },
  "edit_form.advanced_robot.robot_title": {
    "value": "この記事を検索エンジンに登録させない（noindex, nofollow）"
  },
  "edit_form.advanced_title.og_title": {
    "value": "og:title"
  },
  "edit_form.advanced_title.page_title": {
    "value": "Page Title"
  },
  "edit_form.advanced_title.page_title.description": {
    "value": "検索用のタイトルを設定することが出来ます。"
  },
  "edit_form.advanced_title.page_title.link": {
    "value": "検索結果シミュレーターを見る"
  },
  "edit_form.advanced_title.settings": {
    "value": "Advanced Title Settings"
  },
  "edit_form.advanced_title.settings_search_result": {
    "value": "検索エンジン用のタイトル設定"
  },
  "edit_form.archive": {
    "value": "Insert from old entries"
  },
  "edit_form.archive-redux": {
    "value": "過去記事貼り付け(Redux版)"
  },
  "edit_form.archive.not_found": {
    "value": "No entries found."
  },
  "edit_form.archive.placeholder": {
    "value": "Enter keyword"
  },
  "edit_form.archive.searching": {
    "value": "Searching..."
  },
  "edit_form.body_length_exceeded_error": {
    "value": "Body is too long."
  },
  "edit_form.bun-ken": {
    "value": "文章ブラッシュアップ"
  },
  "edit_form.bun-ken.external_link": {
    "value": "※ここから先は(株)ウェブライダーの外部サイトへ移動します。利用規約に従ってご利用ください。"
  },
  "edit_form.bun-ken.terms_of_use": {
    "value": "文賢 for はてなブログPro 利用規約"
  },
  "edit_form.cannot_insert_in_preview_tab": {
    "value": "You are in the preview mode.\nTo edit the article, switch to the editor tab."
  },
  "edit_form.category_aside_notice": {
    "value": "The first category will be used in breadcrumb list."
  },
  "edit_form.category_description": {
    "value": "Enter category name or choose from category list."
  },
  "edit_form.category_description2": {
    "value": "Categorize the articles in your blog. Enter a category or select from a list."
  },
  "edit_form.category_notice": {
    "value": "Press Enter to confirm."
  },
  "edit_form.character_count_exceeded_error": {
    "args": [
      1
    ],
    "value": "Your entry cannot be posted because it exceeds %s characters."
  },
  "edit_form.character_count_exceeded_error %1": {
    "args": [
      1
    ],
    "value": "Your entry cannot be posted because it exceeds %s characters."
  },
  "edit_form.character_count_exceeded_error [_1]": {
    "args": [
      1
    ],
    "value": "Your entry cannot be posted because it exceeds %s characters."
  },
  "edit_form.character_count_unit": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s characters",
    "value_1": "%s character"
  },
  "edit_form.character_count_unit %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s characters",
    "value_1": "%s character"
  },
  "edit_form.character_count_unit [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s characters",
    "value_1": "%s character"
  },
  "edit_form.colorpicker.cancel": {
    "value": "Reset"
  },
  "edit_form.customurl_description": {
    "args": [
      1
    ],
    "value": "Change the URL from %sentry/ to one of your preference."
  },
  "edit_form.customurl_description %1": {
    "args": [
      1
    ],
    "value": "Change the URL from %sentry/ to one of your preference."
  },
  "edit_form.customurl_description [_1]": {
    "args": [
      1
    ],
    "value": "Change the URL from %sentry/ to one of your preference."
  },
  "edit_form.datetime_description": {
    "value": "Edit the posting date/time of your entry"
  },
  "edit_form.dazn": {
    "value": "Insert DAZN video"
  },
  "edit_form.dazn.description": {
    "value": "You can search DAZN videos and insert videos to your entry."
  },
  "edit_form.dazn.empty": {
    "value": "The video you entered was not found."
  },
  "edit_form.dazn.placeholder": {
    "value": "Input keyword"
  },
  "edit_form.delete": {
    "value": "Delete"
  },
  "edit_form.draft.saved": {
    "value": "Saved"
  },
  "edit_form.draft.saving": {
    "value": "Saving..."
  },
  "edit_form.draft_button": {
    "value": "Save as draft"
  },
  "edit_form.edit": {
    "value": "Edit"
  },
  "edit_form.editor_option": {
    "value": "Editing options"
  },
  "edit_form.empty_items": {
    "value": "not found"
  },
  "edit_form.failed_to_save_draft": {
    "value": "Failed to save draft. Please try again later."
  },
  "edit_form.flickr": {
    "value": "Insert Flickr images"
  },
  "edit_form.flickr.description": {
    "value": "Search and insert Creative Commons licensed images on Flickr."
  },
  "edit_form.flickr.photostream": {
    "value": "Photostream"
  },
  "edit_form.flickr.photostream.description": {
    "value": "Enter Flickr screen name to load your photos."
  },
  "edit_form.flickr.placeholder": {
    "value": "Enter keyword"
  },
  "edit_form.flickr.register": {
    "value": "Link account"
  },
  "edit_form.flickr.screen_name": {
    "value": "Flickr screen name"
  },
  "edit_form.flickr.search": {
    "value": "Search"
  },
  "edit_form.flickr.search.description": {
    "value": "Search and insert Creative Commons licensed images on Flickr."
  },
  "edit_form.flickr.user_name": {
    "value": "Flickr user name"
  },
  "edit_form.footnote_message": {
    "value": "Write footnote here"
  },
  "edit_form.get_data_failed": {
    "value": "Unable to retrieve data. Please wait a while and try again."
  },
  "edit_form.gist": {
    "value": "Insert Gist"
  },
  "edit_form.gist.description": {
    "value": "Enter GitHub User name to search Gists."
  },
  "edit_form.gist.user_name": {
    "value": "GitHub user name"
  },
  "edit_form.google-photos.all_images": {
    "value": "All images"
  },
  "edit_form.google_picker.confirm_google_photos": {
    "value": "移行する"
  },
  "edit_form.google_picker.confirm_google_photos.description": {
    "value": "これまで投稿したGoogleフォトの画像を、はてなフォトライフに移行してください。"
  },
  "edit_form.google_picker.confirm_google_photos.title": {
    "value": "はてなフォトライフへ画像の移行をお願いします"
  },
  "edit_form.input_url.specify": {
    "value": "画像URLで指定する"
  },
  "edit_form.link_url_message": {
    "value": "Write URL here"
  },
  "edit_form.link_url_prompt": {
    "value": "Enter URL to link."
  },
  "edit_form.og_description": {
    "value": "You can specify post description in this entry."
  },
  "edit_form.og_description.description": {
    "value": "記事の概要を入力します。未入力の場合は記事本文の冒頭がそのまま抜粋されます。"
  },
  "edit_form.og_description.label": {
    "value": "post description"
  },
  "edit_form.og_description.placeholder": {
    "value": "概要を入力（任意）"
  },
  "edit_form.og_image.create": {
    "value": "アイキャッチ画像を作る"
  },
  "edit_form.og_image.create.canva_account_required": {
    "value": "Canvaの無料会員登録が必要です。"
  },
  "edit_form.og_image.create.help": {
    "value": "画像の作り方"
  },
  "edit_form.og_image_description": {
    "value": "You can choose post thumbnail from images in the entry."
  },
  "edit_form.og_image_upload_failure": {
    "value": "画像のアップロードに失敗しました。お手数ですが再度お試しください。"
  },
  "edit_form.paste": {
    "value": "Insert selected items"
  },
  "edit_form.pikaday.months": {
    "value": "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
  },
  "edit_form.pikaday.next_month": {
    "value": "Next month"
  },
  "edit_form.pikaday.previous_month": {
    "value": "Previous month"
  },
  "edit_form.pikaday.weekdays": {
    "value": "Sumday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"
  },
  "edit_form.pikaday.weekdays_short": {
    "value": "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
  },
  "edit_form.pikaday.year_suffix": {
    "value": "年"
  },
  "edit_form.profile-card": {
    "value": "プロフィールカード"
  },
  "edit_form.profile_card": {
    "value": "プロフィールカード"
  },
  "edit_form.profile_card.all_profile_cards": {
    "value": "プロフィールカード一覧"
  },
  "edit_form.profile_card.config_link": {
    "value": "プロフィールカードを追加・編集する"
  },
  "edit_form.profile_card.description": {
    "value": "記事下に著者プロフィールを表示できます。"
  },
  "edit_form.profile_card.edit_permission_required": {
    "value": "※プロフィールカードの追加・編集には、編集者または管理者権限が必要です。"
  },
  "edit_form.profile_card.filter_placeholder": {
    "value": "プロフィールカード名を検索"
  },
  "edit_form.profile_card.no_matched_profile_cards": {
    "value": "お探しのプロフィールカードがありません。"
  },
  "edit_form.profile_card.no_profile_cards": {
    "value": "プロフィールカードが作成されていません。"
  },
  "edit_form.profile_card.no_selected_cards": {
    "value": "プロフィールカードが選択されていません"
  },
  "edit_form.profile_card.selected": {
    "value": "選択中のプロフィールカード"
  },
  "edit_form.publish_soon": {
    "value": "すぐに公開する"
  },
  "edit_form.published_datetime_description": {
    "value": "記事の日時を編集できます。予約投稿するには、記事を下書きに戻してから、未来の日時を選択してください。"
  },
  "edit_form.rakuten": {
    "value": "Insert Rakuten Products"
  },
  "edit_form.rakuten.api_limit_exceeded": {
    "value": "Failed to load data. Please try again later."
  },
  "edit_form.rakuten.description": {
    "value": "You can search items from Rakuten and insert links to your entry."
  },
  "edit_form.rakuten.empty": {
    "args": [
      1
    ],
    "value": "No items were found for keyword \"%s\"."
  },
  "edit_form.rakuten.empty %1": {
    "args": [
      1
    ],
    "value": "No items were found for keyword \"%s\"."
  },
  "edit_form.rakuten.empty [_1]": {
    "args": [
      1
    ],
    "value": "No items were found for keyword \"%s\"."
  },
  "edit_form.rakuten.placeholder": {
    "value": "Input keyword"
  },
  "edit_form.rakuten.price": {
    "value": "Price: %1 yen"
  },
  "edit_form.save": {
    "value": "Save"
  },
  "edit_form.saving": {
    "value": "Saving..."
  },
  "edit_form.schedule_coming_entry": {
    "value": "未来の日時を選択してください"
  },
  "edit_form.schedule_this_entry": {
    "value": "Schedule a post for the specified date/time"
  },
  "edit_form.scheduled_update.existing_notice.body1": {
    "args": [
      1,
      1,
      2,
      3
    ],
    "value": "今この記事を更新しても、%sには別の内容で上書きされます。%s以降の記事の内容を編集したい場合は、「%s」から「%s」してください。"
  },
  "edit_form.scheduled_update.existing_notice.body1 %1%2%3": {
    "args": [
      1,
      1,
      2,
      3
    ],
    "value": "今この記事を更新しても、%sには別の内容で上書きされます。%s以降の記事の内容を編集したい場合は、「%s」から「%s」してください。"
  },
  "edit_form.scheduled_update.existing_notice.body1 [_1][_2][_3]": {
    "args": [
      1,
      1,
      2,
      3
    ],
    "value": "今この記事を更新しても、%sには別の内容で上書きされます。%s以降の記事の内容を編集したい場合は、「%s」から「%s」してください。"
  },
  "edit_form.scheduled_update.existing_notice.body2": {
    "args": [
      1
    ],
    "value": "%s以降に掲載される内容を編集したい場合は、「記事の管理」から「差し替え予約を編集」してください。"
  },
  "edit_form.scheduled_update.existing_notice.body2 %1": {
    "args": [
      1
    ],
    "value": "%s以降に掲載される内容を編集したい場合は、「記事の管理」から「差し替え予約を編集」してください。"
  },
  "edit_form.scheduled_update.existing_notice.body2 [_1]": {
    "args": [
      1
    ],
    "value": "%s以降に掲載される内容を編集したい場合は、「記事の管理」から「差し替え予約を編集」してください。"
  },
  "edit_form.scheduled_update.existing_notice.title": {
    "value": "差し替え予約が設定されています"
  },
  "edit_form.set_draft_datetime": {
    "value": "下書き保存する"
  },
  "edit_form.snippet": {
    "value": "Snippets"
  },
  "edit_form.snippet.delete.confirm": {
    "args": [
      1
    ],
    "value": "Are you sure to delete the snippet \"%s\"?"
  },
  "edit_form.snippet.delete.confirm %1": {
    "args": [
      1
    ],
    "value": "Are you sure to delete the snippet \"%s\"?"
  },
  "edit_form.snippet.delete.confirm [_1]": {
    "args": [
      1
    ],
    "value": "Are you sure to delete the snippet \"%s\"?"
  },
  "edit_form.snippet.description": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippets.",
    "value_1": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippet."
  },
  "edit_form.snippet.description %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippets.",
    "value_1": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippet."
  },
  "edit_form.snippet.description [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippets.",
    "value_1": "You can save frequently used phrases or HTML tags as reusable snippets. Select some text in the editor and click on the 'Create snippet' button to save the text as a snippet. You can save up to %s snippet."
  },
  "edit_form.snippet.field.too_long": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "Maximum character limit exceeded (Max: %s characters)",
    "value_1": "Maximum character limit exceeded (Max: %s character)"
  },
  "edit_form.snippet.field.too_long %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "Maximum character limit exceeded (Max: %s characters)",
    "value_1": "Maximum character limit exceeded (Max: %s character)"
  },
  "edit_form.snippet.field.too_long [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "Maximum character limit exceeded (Max: %s characters)",
    "value_1": "Maximum character limit exceeded (Max: %s character)"
  },
  "edit_form.snippet.filter_placeholder": {
    "value": "定型文を検索"
  },
  "edit_form.snippet.list.header": {
    "args": [
      1
    ],
    "value": "Your snippets (%s)"
  },
  "edit_form.snippet.list.header %1": {
    "args": [
      1
    ],
    "value": "Your snippets (%s)"
  },
  "edit_form.snippet.list.header [_1]": {
    "args": [
      1
    ],
    "value": "Your snippets (%s)"
  },
  "edit_form.snippet.no_title": {
    "value": "(No title)"
  },
  "edit_form.snippet.paste": {
    "value": "Paste selected snippet"
  },
  "edit_form.snippet.save": {
    "value": "Create snippet"
  },
  "edit_form.snippet.title": {
    "value": "定型文貼り付け"
  },
  "edit_form.snippet.update": {
    "value": "Update snippet"
  },
  "edit_form.title": {
    "value": "Title"
  },
  "edit_form.toolbar.button_hide": {
    "value": "Open / Close"
  },
  "edit_form.toolbar.button_more": {
    "value": "Open / Close"
  },
  "edit_form.toolbar.insertTOC": {
    "value": "Table of contents"
  },
  "edit_form.update_draft_button": {
    "value": "Update draft"
  },
  "edit_form.url_description": {
    "args": [
      1
    ],
    "value": "Change the URL from %s to one of your preference."
  },
  "edit_form.url_description %1": {
    "args": [
      1
    ],
    "value": "Change the URL from %s to one of your preference."
  },
  "edit_form.url_description [_1]": {
    "args": [
      1
    ],
    "value": "Change the URL from %s to one of your preference."
  },
  "edit_form.youtube": {
    "value": "Insert from YouTube"
  },
  "edit_form.youtube.description": {
    "value": "You can post videos from YouTube."
  },
  "edit_form.youtube.failed_to_fetch": {
    "value": "Failed to fetch videos."
  },
  "edit_form.youtube.failed_to_fetch_details": {
    "value": "If it continues to fail, please search for the video in YouTube and paste the URL of the video in the editor. We are sorry for the inconvenience."
  },
  "edit_form.youtube.go_to_youtube": {
    "value": "Go to YouTube"
  },
  "edit_form.youtube.not_found": {
    "value": "No results found."
  },
  "edit_form.youtube.placeholder": {
    "value": "Input keyword"
  },
  "edit_form.youtube.view_count": {
    "args": [
      1
    ],
    "value": "%s views"
  },
  "edit_form.youtube.view_count %1": {
    "args": [
      1
    ],
    "value": "%s views"
  },
  "edit_form.youtube.view_count [_1]": {
    "args": [
      1
    ],
    "value": "%s views"
  },
  "edit_tab": {
    "value": "Edit Tabs"
  },
  "editor.instagram.no_caption_title": {
    "args": [
      1,
      2
    ],
    "value": "Instagram post by %s • %s"
  },
  "editor.instagram.no_caption_title %1%2": {
    "args": [
      1,
      2
    ],
    "value": "Instagram post by %s • %s"
  },
  "editor.instagram.no_caption_title [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "Instagram post by %s • %s"
  },
  "epic.change_primary": {
    "value": "Set as primary blog"
  },
  "epic.confirm_subscribe": {
    "args": [
      1,
      2
    ],
    "value": "Subscribe \"%s\" (%s) ?"
  },
  "epic.confirm_subscribe %1%2": {
    "args": [
      1,
      2
    ],
    "value": "Subscribe \"%s\" (%s) ?"
  },
  "epic.confirm_subscribe [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "Subscribe \"%s\" (%s) ?"
  },
  "epic.confirm_unsubscribe": {
    "args": [
      1,
      2
    ],
    "value": "Unsubscribe \"%s\" (%s)?"
  },
  "epic.confirm_unsubscribe %1%2": {
    "args": [
      1,
      2
    ],
    "value": "Unsubscribe \"%s\" (%s)?"
  },
  "epic.confirm_unsubscribe [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "Unsubscribe \"%s\" (%s)?"
  },
  "epic.delete.confirm": {
    "value": "This will now be deleted. Are you sure you want to continue?"
  },
  "epic.delete.confirm.category": {
    "value": "This category will now be deleted. Are you sure you want to continue?"
  },
  "epic.editarea.hover": {
    "value": "Drop image files here"
  },
  "epic.editor_group": {
    "value": "グループ貼り付け"
  },
  "epic.editor_group.description": {
    "value": "所属するグループを記事に貼り付けて、ランキングに参加できます。"
  },
  "epic.editor_group.description.help": {
    "value": "ランキングへの参加方法"
  },
  "epic.editor_group.empty.action": {
    "value": "グループをさがす"
  },
  "epic.editor_group.empty.heading": {
    "value": "グループに加入して、ランキングに参加しましょう"
  },
  "epic.embed_photo.submit": {
    "value": "記事編集画面に貼り付ける"
  },
  "epic.entry.delete.confirm": {
    "value": "This will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries %1": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries [_1]": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries_num": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries_num %1": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.entry.delete.confirm_with_entries_num [_1]": {
    "args": [
      1
    ],
    "value": "%s entries will now be deleted. Are you sure you want to continue?"
  },
  "epic.failed_to_load": {
    "value": "読み込みに失敗しました"
  },
  "epic.file_uploader": {
    "value": "ファイルアップローダー"
  },
  "epic.file_uploader.beta": {
    "value": "ファイルアップローダー(β版)"
  },
  "epic.file_uploader.copied": {
    "value": "コピーしました"
  },
  "epic.file_uploader.copy": {
    "value": "リンクをコピー"
  },
  "epic.file_uploader.delete": {
    "value": "削除する"
  },
  "epic.file_uploader.delete.alert": {
    "value": "ファイルを削除します。この操作は取り消せません。続けますか？"
  },
  "epic.file_uploader.description": {
    "value": "画像，SVG，CSS，JavaScript，PDFをアップロードできます。画像はフォトライフの「Hatena Blog Files」フォルダにアップロードされます。"
  },
  "epic.file_uploader.drop_here": {
    "value": "ここにファイルをドロップ"
  },
  "epic.file_uploader.previous_items": {
    "value": "過去のアップロード結果"
  },
  "epic.file_uploader.upload_result": {
    "value": "アップロード結果"
  },
  "epic.image_alt": {
    "value": "画像の代替テキスト"
  },
  "epic.kotoba.max_tag_name_length": {
    "args": [
      1
    ],
    "value": "タグは最大で%s文字までです"
  },
  "epic.kotoba.max_tag_name_length %1": {
    "args": [
      1
    ],
    "value": "タグは最大で%s文字までです"
  },
  "epic.kotoba.max_tag_name_length [_1]": {
    "args": [
      1
    ],
    "value": "タグは最大で%s文字までです"
  },
  "epic.kotoba.max_tags_per_entry": {
    "args": [
      1
    ],
    "value": "記事に設定できるタグの個数は%s個までです"
  },
  "epic.kotoba.max_tags_per_entry %1": {
    "args": [
      1
    ],
    "value": "記事に設定できるタグの個数は%s個までです"
  },
  "epic.kotoba.max_tags_per_entry [_1]": {
    "args": [
      1
    ],
    "value": "記事に設定できるタグの個数は%s個までです"
  },
  "epic.kotoba_modal.desc.1": {
    "value": "同じ興味の人に読まれやすく"
  },
  "epic.kotoba_modal.desc.2": {
    "value": "するために、"
  },
  "epic.kotoba_modal.desc.3": {
    "value": "記事にタグをつけてみましょう！"
  },
  "epic.kotoba_modal.desc.heading": {
    "value": "あなたの記事、読みたい人へ届けよう"
  },
  "epic.more": {
    "value": "Read more"
  },
  "epic.new_feature": {
    "value": "新機能"
  },
  "epic.primary_blog": {
    "value": "Primary Blog"
  },
  "epic.show_detail": {
    "value": "Click here for more information"
  },
  "epic.subscribe": {
    "value": "Subscribe"
  },
  "epic.subscriber": {
    "value": "subscriber"
  },
  "epic.subscriber_count": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s",
    "value_1": "%s"
  },
  "epic.subscriber_count %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s",
    "value_1": "%s"
  },
  "epic.subscriber_count [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s",
    "value_1": "%s"
  },
  "epic.subscribing": {
    "value": "Subscribed"
  },
  "epic.subscription_list": {
    "value": ""
  },
  "epic.syntax_switch": {
    "value": "Body and title will be deleted after syntax switching, and you can't undo this operation.\n\nAre you sure to switch the editing mode ? \n"
  },
  "epic.try_use": {
    "value": "使ってみる"
  },
  "epic.view_more": {
    "value": "See more"
  },
  "epic.yahoo_import_password_copied": {
    "value": "copied"
  },
  "f.hatena.ne.jp": {
    "value": "Hatena Fotolife"
  },
  "form.confirm.changed": {
    "value": "Do you want to continue without saving?"
  },
  "form.confirm.changed.epic": {
    "value": "Do you want to continue without saving?"
  },
  "fotolife.folder.top": {
    "value": "Top"
  },
  "g.hatena.ne.jp": {
    "value": "Hatena Group"
  },
  "global.activate": {
    "value": "activate"
  },
  "global.confirm": {
    "value": "Are you sure?"
  },
  "global.deactivate": {
    "value": "deactivate"
  },
  "global.done": {
    "value": "Done"
  },
  "global.message.deleted": {
    "value": "Deleted"
  },
  "go_to_settings": {
    "value": "External Service Settings"
  },
  "h.hatena.ne.jp": {
    "value": "Hatena Haiku"
  },
  "help": {
    "value": "Help"
  },
  "hidden_subscribes": {
    "value": "..."
  },
  "hours_n": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s hours",
    "value_1": "%s hour"
  },
  "hours_n %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s hours",
    "value_1": "%s hour"
  },
  "hours_n [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s hours",
    "value_1": "%s hour"
  },
  "i.hatena.ne.jp": {
    "value": "Hatena Idea"
  },
  "k.hatena.ne.jp": {
    "value": "Hatena Keyword"
  },
  "l.hatena.ne.jp": {
    "value": "Hatena Land"
  },
  "lang": {
    "value": "Language"
  },
  "lang.en.native": {
    "value": "English"
  },
  "lang.ja.native": {
    "value": "日本語"
  },
  "list.more": {
    "value": "See more"
  },
  "loading": {
    "value": "Loading…"
  },
  "logout": {
    "value": "Logout"
  },
  "m.hatena.ne.jp": {
    "value": "Hatena Message"
  },
  "minutes_n": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s minutes",
    "value_1": "%s minute"
  },
  "minutes_n %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s minutes",
    "value_1": "%s minute"
  },
  "minutes_n [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s minutes",
    "value_1": "%s minute"
  },
  "mono.hatena.ne.jp": {
    "value": "Hatena Monolith"
  },
  "my_hatena": {
    "value": "My Hatena"
  },
  "n.hatena.ne.jp": {
    "value": "Hatena"
  },
  "new_entry": {
    "value": "New Entry"
  },
  "none": {
    "value": "None"
  },
  "notices": {
    "value": "Notices"
  },
  "ok": {
    "value": "OK"
  },
  "pager.page_num": {
    "args": [
      1
    ],
    "value": "Page %s"
  },
  "pager.page_num %1": {
    "args": [
      1
    ],
    "value": "Page %s"
  },
  "pager.page_num [_1]": {
    "args": [
      1
    ],
    "value": "Page %s"
  },
  "placeholder.ip_address": {
    "value": "IP Address"
  },
  "plural_entries": {
    "value": "entries"
  },
  "plural_entry": {
    "value": "entries"
  },
  "preview": {
    "value": "Preview"
  },
  "profile": {
    "value": "Profile"
  },
  "profile.change": {
    "value": "Change"
  },
  "profile.image.change": {
    "value": "Change your profile image"
  },
  "publication.layout": {
    "value": "レイアウト"
  },
  "publication.layout.description": {
    "value": "ページのレイアウトを設定できます"
  },
  "publication.layout.entry": {
    "value": "記事レイアウト"
  },
  "publication.layout.entry.description": {
    "value": "通常の記事と同じレイアウトです。"
  },
  "publication.layout.free": {
    "value": "フリーレイアウト(β版)"
  },
  "publication.layout.free.description": {
    "value": "真っさらな状態から自由にHTMLやCSS\nを書いてページを作成できます。"
  },
  "publication.layout.header_footer": {
    "value": "ヘッダ・フッタレイアウト"
  },
  "publication.layout.header_footer.description": {
    "value": "通常の記事から、サイドバーを無くしたレイアウトです。"
  },
  "publication_type.page": {
    "value": "固定ページ"
  },
  "q.hatena.ne.jp": {
    "value": "Hatena Question"
  },
  "r.hatena.ne.jp": {
    "value": "Hatena RSS"
  },
  "read_more_comments": {
    "value": "Read more"
  },
  "really_want_to_logout": {
    "value": "Do you really want to logout?"
  },
  "s.hatena.ne.jp": {
    "value": "Hatena Star"
  },
  "save": {
    "value": "Save"
  },
  "see_more": {
    "value": "Read more"
  },
  "services_in_use": {
    "value": "Services used"
  },
  "settings": {
    "value": "Settings"
  },
  "space.hatena.ne.jp": {
    "value": "Hatena Space"
  },
  "star-navigation-message": {
    "value": "If you liked this entry, push the star button to let the author know!"
  },
  "subscribed_list.no_subscribe.description": {
    "value": "読者機能を使って、読みたいブログの更新を簡単にチェックできます。気になるブログを見つけたら読者になってみましょう！"
  },
  "subscribed_list.no_subscribe.heading": {
    "value": "気になるブログの読者になってみましょう"
  },
  "subscribed_list.no_subscribe.help": {
    "value": "使い方はこちら"
  },
  "subscribed_list.no_subscribe.how_to_use": {
    "value": "読者機能の使い方"
  },
  "subscribed_list.no_subscribe.message": {
    "value": "まだ読者になっていません"
  },
  "there_are_no_service_in_use": {
    "value": "No services in use"
  },
  "ugomemo.hatena.ne.jp": {
    "value": "Flipnote Hatena"
  },
  "unit_day": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "unit_day %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "unit_day [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s days",
    "value_1": "%s day"
  },
  "unit_entry": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s entries",
    "value_1": "%s entry"
  },
  "unit_entry %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s entries",
    "value_1": "%s entry"
  },
  "unit_entry [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s entries",
    "value_1": "%s entry"
  },
  "unit_person": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s people",
    "value_1": "%s person"
  },
  "unit_person %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s people",
    "value_1": "%s person"
  },
  "unit_person [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s people",
    "value_1": "%s person"
  },
  "uploading": {
    "value": "Uploading"
  },
  "user.config.profile.errors.check_type": {
    "value": "You can upload jpg, png, gif, and bmp images."
  },
  "users_entry": {
    "args": [
      1,
      2
    ],
    "value": "%s's %s"
  },
  "users_entry %1%2": {
    "args": [
      1,
      2
    ],
    "value": "%s's %s"
  },
  "users_entry [_1][_2]": {
    "args": [
      1,
      2
    ],
    "value": "%s's %s"
  },
  "years_n": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s years",
    "value_1": "%s year"
  },
  "years_n %1": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s years",
    "value_1": "%s year"
  },
  "years_n [_1]": {
    "args": [
      1
    ],
    "args_1": [
      1
    ],
    "quanttype": "1_o",
    "value": "%s years",
    "value_1": "%s year"
  },
  "youth.hatena": {
    "value": "Hatena"
  }
}
